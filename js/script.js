/**
 * RAC KTM KALANKI - Interactive Frontend Script
 * Built with pure Vanilla JavaScript (ES6+)
 * 
 * Features:
 * - Mobile Navigation Menu Drawer Toggle
 * - Accessible FAQ Accordion Toggle with Smooth Transitions
 * - Navbar Shadow on Scroll
 * - Scroll-Triggered Fade-In Animations (IntersectionObserver)
 */

document.addEventListener('DOMContentLoaded', () => {
  
  /* --------------------------------------------------------------------------
     1. Mobile Navigation Toggle
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.classList.contains('active');
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Navbar Scroll Styling
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  /* --------------------------------------------------------------------------
     3. FAQ Accordion Interactivity
     -------------------------------------------------------------------------- */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Close all other active accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== currentItem && item.classList.contains('active')) {
          item.classList.remove('active');
          const itemHeader = item.querySelector('.accordion-header');
          const itemContent = item.querySelector('.accordion-content');
          if (itemHeader) itemHeader.setAttribute('aria-expanded', 'false');
          if (itemContent) itemContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isExpanded) {
        currentItem.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        currentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Scroll Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => revealObserver.observe(el));

});
