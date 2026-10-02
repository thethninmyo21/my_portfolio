import { useState } from 'react';

const tabs = [
  { id: 'gesture', label: 'useSwipeGesture.ts', icon: '⚛', iconColor: '#61dafb' },
  { id: 'bridge',  label: 'TurboModuleBridge.swift', icon: '🍎', iconColor: '#f59e0b' },
  { id: 'offline', label: 'useOfflineSync.ts', icon: '💾', iconColor: '#34d399' },
];

const snippets = {
  gesture: `import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';

/**
 * 60 FPS Reanimated 3 Gesture Hook running entirely on UI Thread
 */
export const useInteractiveCardSwipe = (onDismiss: () => void) => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      scale.value = withSpring(0.95);
    })
    .onUpdate((event) => {
      'worklet';
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      'worklet';
      if (Math.abs(event.translationX) > 160) {
        translateX.value = withSpring(Math.sign(event.translationX) * 500, {}, () => {
          runOnJS(onDismiss)();
        });
      } else {
        translateX.value = withSpring(0, { damping: 14 });
        scale.value = withSpring(1);
      }
    });

  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { scale: scale.value },
      { rotateZ: \`\${translateX.value / 25}deg\` }
    ]
  }));

  return { panGesture, animatedCardStyle };
};`,

  bridge: `import Foundation
import LocalAuthentication
import React

/**
 * High-performance Native Swift TurboModule for Biometric Auth
 */
@objc(BiometricsModule)
class BiometricsModule: NSObject {

  @objc(authenticateUser:rejecter:)
  func authenticateUser(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    let context = LAContext()
    var error: NSError?

    guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
      reject("BIOMETRIC_UNAVAILABLE", "Biometrics not configured on this device", error)
      return
    }

    let reason = "Authenticate to access your PayWave encrypted wallet"
    context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason) { success, authError in
      DispatchQueue.main.async {
        if success {
          resolve(["status": "SUCCESS", "timestamp": Date().timeIntervalSince1970])
        } else {
          reject("AUTH_FAILED", authError?.localizedDescription ?? "Authentication Failed", authError)
        }
      }
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}`,

  offline: `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'offline-cache-vault' });

/**
 * Offline-First TanStack Query Hook with instant MMKV fallback
 */
export function useOfflineResource<T>(queryKey: string, fetcher: () => Promise<T>) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const freshData = await fetcher();
        storage.set(queryKey, JSON.stringify(freshData));
        return freshData;
      } catch (err) {
        const cached = storage.getString(queryKey);
        if (cached) {
          return JSON.parse(cached) as T;
        }
        throw err;
      }
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    networkMode: 'offlineFirst',
  });
}`,
};

export default function CodeExplorer() {
  const [activeTab, setActiveTab] = useState('gesture');
  const [copyText, setCopyText]   = useState('Copy Snippet');

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]).then(() => {
      setCopyText('Copied!');
      setTimeout(() => setCopyText('Copy Snippet'), 2000);
    });
  };

  return (
    <section className="section" style={{ background:'rgba(15,23,42,0.5)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Code Explorer</span>
          <h2>Production-Grade React Native Code</h2>
          <p>Explore real-world patterns implemented in production: Reanimated 3 worklets, native Swift TurboModules, and offline cache hooks.</p>
        </div>

        <div className="code-explorer">
          <div className="code-nav-bar">
            <div className="code-tabs">
              {tabs.map(t => (
                <button
                  key={t.id}
                  className={`code-tab-btn${activeTab === t.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <span style={{ color: t.iconColor }}>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
            <button className="copy-code-btn" onClick={handleCopy}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              {copyText}
            </button>
          </div>
          <div className="code-content-panel">
            <pre className="code-block active">
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
