/**
 * Modern Interactive JavaScript for G Bhanuteja Portfolio
 * Features: Scrollspy, Mobile Drawer, Filter Tabs, Lightbox, Copy Email, Project Modals
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // 1. Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function() {
      preloader.style.transition = 'opacity 0.4s ease';
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 400);
    });
  }

  // 2. Typed Text Effect (with Typed.js or Vanilla Fallback)
  const typedEl = document.querySelector('.typed');
  if (typedEl) {
    const rawItems = typedEl.getAttribute('data-typed-items');
    if (rawItems) {
      const items = rawItems.split(',').map(s => s.trim());
      if (typeof Typed !== 'undefined') {
        new Typed('.typed', {
          strings: items,
          loop: true,
          typeSpeed: 60,
          backSpeed: 35,
          backDelay: 2200
        });
      } else {
        // Fallback simple typewriter
        let itemIdx = 0, charIdx = 0, isDeleting = false;
        function typeLoop() {
          const currentText = items[itemIdx];
          if (isDeleting) {
            typedEl.textContent = currentText.substring(0, charIdx - 1);
            charIdx--;
          } else {
            typedEl.textContent = currentText.substring(0, charIdx + 1);
            charIdx++;
          }
          let speed = isDeleting ? 30 : 60;
          if (!isDeleting && charIdx === currentText.length) {
            speed = 2200;
            isDeleting = true;
          } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            itemIdx = (itemIdx + 1) % items.length;
            speed = 500;
          }
          setTimeout(typeLoop, speed);
        }
        typeLoop();
      }
    }
  }

  // 3. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('show');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('show')) {
          icon.className = 'bx bx-x';
        } else {
          icon.className = 'bx bx-menu';
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('show');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'bx bx-menu';
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'bx bx-menu';
      });
    });
  }

  // 4. Scrollspy Navigation Indicator
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu li a');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offset = 180;

    sections.forEach(sec => {
      const secTop = sec.offsetTop - offset;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          const parent = link.parentElement;
          if (link.getAttribute('href') === `#${secId}`) {
            parent.classList.add('active');
          } else {
            parent.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  // 5. Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 6. Portfolio Filter Navigation
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterVal = this.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category') || '';
          if (filterVal === '*' || filterVal === 'all' || cardCat.includes(filterVal)) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Lightbox for Hackathon Photos and Architecture Diagrams
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImageDisplay');
  const modalCaption = document.getElementById('modalCaptionDisplay');
  const modalSub = document.getElementById('modalSubCaptionDisplay');
  const modalClose = document.getElementById('modalCloseBtn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let activeGalleryIndex = -1;
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.getAttribute('data-full-img'),
    title: item.getAttribute('data-caption-title') || '',
    sub: item.getAttribute('data-caption-sub') || ''
  }));

  function openImageModal(index) {
    if (!imageModal || !galleryData[index]) return;
    activeGalleryIndex = index;
    const data = galleryData[index];
    modalImg.src = data.src;
    modalCaption.textContent = data.title;
    modalSub.textContent = data.sub;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeImageModal() {
    if (!imageModal) return;
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openImageModal(idx));
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeImageModal);
  }
  if (imageModal) {
    imageModal.addEventListener('click', function(e) {
      if (e.target === imageModal) closeImageModal();
    });
  }

  // Keyboard navigation for Modal
  document.addEventListener('keydown', function(e) {
    if (!imageModal || !imageModal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowRight') {
      if (activeGalleryIndex < galleryData.length - 1) {
        openImageModal(activeGalleryIndex + 1);
      } else {
        openImageModal(0);
      }
    } else if (e.key === 'ArrowLeft') {
      if (activeGalleryIndex > 0) {
        openImageModal(activeGalleryIndex - 1);
      } else {
        openImageModal(galleryData.length - 1);
      }
    }
  });

  // 8. Copy Email to Clipboard Helper
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const email = 'g.bhanuteja23@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="bx bx-check"></i> Copied to Clipboard!';
        copyBtn.style.background = 'var(--accent-nvidia)';
        copyBtn.style.color = '#000';
        setTimeout(() => {
          copyBtn.innerHTML = origText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2500);
      }).catch(err => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  // 9. Contact Form mailto Handler
  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('senderName')?.value || '';
      const email = document.getElementById('senderEmail')?.value || '';
      const subject = document.getElementById('senderSubject')?.value || 'Inquiry from Portfolio';
      const message = document.getElementById('senderMessage')?.value || '';

      const bodyText = `Hi Bhanuteja,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
      const mailtoUrl = `mailto:g.bhanuteja23@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show friendly confirmation
      const alertBox = document.getElementById('formSuccessAlert');
      if (alertBox) {
        alertBox.style.display = 'block';
        setTimeout(() => alertBox.style.display = 'none', 6000);
      }
    });
  }

  // 10. Initialize AOS animation library if present
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }
});

// 11. Support Owl Carousel on Portfolio Details sub-pages if jQuery & OwlCarousel are present
if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
  jQuery('.portfolio-details-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    margin: 15
  });
}
