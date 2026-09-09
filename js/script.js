/**
 * React Native & Mobile Developer Portfolio - Interactive Engine
 * Author: Thet Hnin Myo (THM)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initStatsCounter();
  initPhoneSimulator();
  initCodeExplorer();
  initContactForm();
  initEmailCopy();
  initClock();
});

/* ==========================================================================
   Navbar & Scroll Spy
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link:not(.mobile-link)');
  const sections = document.querySelectorAll('section, header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Mobile Drawer Toggle
   ========================================================================== */
function initMobileDrawer() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!mobileToggle || !mobileDrawer) return;

  mobileToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
    mobileToggle.textContent = mobileDrawer.classList.contains('open') ? '✕' : '☰';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileToggle.textContent = '☰';
    });
  });
}

/* ==========================================================================
   Stats Number Count-Up Animation
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1500;
          const steps = 60;
          const stepValue = target / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current += stepValue;
            if (step >= steps) {
              counter.textContent = isDecimal ? target.toFixed(1) : target;
              clearInterval(timer);
            } else {
              counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            }
          }, duration / steps);
        });
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    observer.observe(heroStats);
  }
}

/* ==========================================================================
   Interactive Smartphone Simulator Logic
   ========================================================================== */
function initPhoneSimulator() {
  const appButtons = document.querySelectorAll('.app-select-btn');
  const appViews = {
    ggi: document.getElementById('app-ggi'),
    fabrix: document.getElementById('app-fabrix'),
    wallet: document.getElementById('app-wallet')
  };

  const phoneFrame = document.getElementById('phone-frame');
  const btnIos = document.getElementById('btn-ios');
  const btnAndroid = document.getElementById('btn-android');
  const btnTriggerNotif = document.getElementById('btn-trigger-notif');
  const simNotif = document.getElementById('sim-notif');
  const notifMessage = document.getElementById('notif-message');

  // App Switching
  appButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      appButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const appKey = btn.getAttribute('data-app');
      Object.keys(appViews).forEach(key => {
        if (appViews[key]) {
          appViews[key].classList.toggle('active', key === appKey);
        }
      });
    });
  });

  // Platform Bezel Toggle
  if (btnIos && btnAndroid && phoneFrame) {
    btnIos.addEventListener('click', () => {
      btnIos.classList.add('active');
      btnAndroid.classList.remove('active');
      const island = phoneFrame.querySelector('.phone-island');
      if (island) {
        island.style.width = '96px';
        island.style.borderRadius = '20px';
      }
    });

    btnAndroid.addEventListener('click', () => {
      btnAndroid.classList.add('active');
      btnIos.classList.remove('active');
      const island = phoneFrame.querySelector('.phone-island');
      if (island) {
        island.style.width = '18px';
        island.style.borderRadius = '50%';
      }
    });
  }

  // Push Notification Trigger
  if (btnTriggerNotif && simNotif) {
    btnTriggerNotif.addEventListener('click', () => {
      const messages = [
        "🛡️ GGI Nippon Life: Annual Policy renewal notice for Policy #GGI-992014.",
        "✨ Fabrix Fashion: You earned 180 loyalty points for today's purchase!",
        "💰 PayWave: Transferred $50.00 to merchant securely.",
        "⚡ React Native 0.74 build deployed successfully via Fastlane CI/CD!"
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      if (notifMessage) notifMessage.textContent = randomMsg;

      simNotif.classList.add('show');
      setTimeout(() => {
        simNotif.classList.remove('show');
      }, 3500);
    });
  }

  // App 1: GGI Mobile Insurance Interactions
  const btnCalcPremium = document.getElementById('btn-calc-premium');
  const btnSubmitClaim = document.getElementById('btn-submit-claim');
  const btnAgentBook = document.getElementById('btn-agent-book');
  const btnDownloadPolicy = document.getElementById('btn-download-policy');

  if (btnCalcPremium) {
    btnCalcPremium.addEventListener('click', () => {
      showSimNotification("🧮 GGI Premium Simulator: Estimated $120/mo for $100k Life Coverage.");
    });
  }

  if (btnSubmitClaim) {
    btnSubmitClaim.addEventListener('click', () => {
      showSimNotification("📝 Digital Claim #CLM-401 submitted to GGI review team.");
    });
  }

  if (btnAgentBook) {
    btnAgentBook.addEventListener('click', () => {
      showSimNotification("📅 Appointment confirmed with Senior GGI Advisor on Friday 2:00 PM.");
    });
  }

  if (btnDownloadPolicy) {
    btnDownloadPolicy.addEventListener('click', () => {
      showSimNotification("📄 Policy Document PDF opened in secure reader.");
    });
  }

  // App 2: Fabrix Fashion Member & Loyalty Interactions
  const fabrixPoints = document.getElementById('fabrix-points');
  const btnRedeemFabrix = document.getElementById('btn-redeem-fabrix');
  const btnAddFabrixPts = document.getElementById('btn-add-fabrix-pts');
  let currentFabrixPts = 2450;

  if (btnRedeemFabrix && fabrixPoints) {
    btnRedeemFabrix.addEventListener('click', () => {
      if (currentFabrixPts >= 500) {
        currentFabrixPts -= 500;
        fabrixPoints.innerHTML = `${currentFabrixPts.toLocaleString()} <span style="font-size: 0.8rem; font-weight: 500;">PTS</span>`;
        showSimNotification("🎁 Redeemed $25 Voucher! QR code updated for checkout.");
      } else {
        showSimNotification("⚠️ Insufficient loyalty points to redeem.");
      }
    });
  }

  if (btnAddFabrixPts && fabrixPoints) {
    btnAddFabrixPts.addEventListener('click', () => {
      currentFabrixPts += 250;
      fabrixPoints.innerHTML = `${currentFabrixPts.toLocaleString()} <span style="font-size: 0.8rem; font-weight: 500;">PTS</span>`;
      showSimNotification("✨ +250 Fabrix Points added from recent store visit!");
    });
  }

  // App 3: PayWave Wallet Interactions
  const btnSendMoney = document.getElementById('btn-send-money');
  const btnReceiveMoney = document.getElementById('btn-receive-money');
  const walletBalance = document.getElementById('wallet-balance');
  let currentBalance = 14892.40;

  if (btnSendMoney && walletBalance) {
    btnSendMoney.addEventListener('click', () => {
      currentBalance = Math.max(0, currentBalance - 50.00);
      walletBalance.textContent = `$${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      showSimNotification("💸 Transferred $50.00 to merchant successfully.");
    });
  }

  if (btnReceiveMoney && walletBalance) {
    btnReceiveMoney.addEventListener('click', () => {
      currentBalance += 100.00;
      walletBalance.textContent = `$${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      showSimNotification("💰 Received $100.00 instant deposit!");
    });
  }

  function showSimNotification(msg) {
    if (notifMessage && simNotif) {
      notifMessage.textContent = msg;
      simNotif.classList.add('show');
      setTimeout(() => {
        simNotif.classList.remove('show');
      }, 3000);
    }
  }
}

/* ==========================================================================
   Interactive Code Explorer Tab Switcher & Clipboard
   ========================================================================== */
function initCodeExplorer() {
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const codeBlocks = {
    gesture: document.getElementById('code-gesture'),
    bridge: document.getElementById('code-bridge'),
    offline: document.getElementById('code-offline')
  };
  const btnCopyCode = document.getElementById('btn-copy-code');
  const copyBtnText = document.getElementById('copy-btn-text');

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabKey = tab.getAttribute('data-tab');
      Object.keys(codeBlocks).forEach(key => {
        if (codeBlocks[key]) {
          codeBlocks[key].classList.toggle('active', key === tabKey);
        }
      });
    });
  });

  if (btnCopyCode && copyBtnText) {
    btnCopyCode.addEventListener('click', () => {
      const activeBlock = document.querySelector('.code-block.active');
      if (!activeBlock) return;

      const codeText = activeBlock.textContent;
      navigator.clipboard.writeText(codeText).then(() => {
        copyBtnText.textContent = '✓ Copied!';
        btnCopyCode.style.borderColor = 'var(--accent-emerald)';
        btnCopyCode.style.color = 'var(--accent-emerald)';

        setTimeout(() => {
          copyBtnText.textContent = 'Copy Snippet';
          btnCopyCode.style.borderColor = '';
          btnCopyCode.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed', err);
      });
    });
  }
}

/* ==========================================================================
   Contact Form Submission Simulator
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formToast = document.getElementById('form-toast');
  const submitBtn = document.getElementById('btn-submit-form');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Inquiry... ⏳';
    }

    setTimeout(() => {
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Project Inquiry ✓';
      }
      if (formToast) {
        formToast.style.display = 'flex';
        setTimeout(() => {
          formToast.style.display = 'none';
          if (submitBtn) {
            submitBtn.innerHTML = `Send Project Inquiry <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
          }
        }, 5000);
      }
    }, 1000);
  });
}

/* ==========================================================================
   Email Copy to Clipboard
   ========================================================================== */
function initEmailCopy() {
  const btnCopyEmail = document.getElementById('btn-copy-email');
  if (!btnCopyEmail) return;

  btnCopyEmail.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const email = 'thethninmyo.dev@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      btnCopyEmail.textContent = '✓ Copied';
      btnCopyEmail.style.borderColor = 'var(--accent-emerald)';
      btnCopyEmail.style.color = 'var(--accent-emerald)';
      setTimeout(() => {
        btnCopyEmail.textContent = 'Copy';
        btnCopyEmail.style.borderColor = '';
        btnCopyEmail.style.color = '';
      }, 2000);
    });
  });
}

/* ==========================================================================
   Simulated Phone Dynamic Clock
   ========================================================================== */
function initClock() {
  const phoneTime = document.getElementById('phone-time');
  if (!phoneTime) return;

  function update() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    phoneTime.textContent = `${hours}:${mins}`;
  }

  update();
  setInterval(update, 30000);
}