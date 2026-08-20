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
     2. Navbar Scroll Styling & Active Link Highlighting
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  
  const handleScroll = () => {
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Active link highlighting based on current page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

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
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    // Initial sync check: elements in or above the current scroll position are marked visible immediately on load/refresh
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      el.classList.add('visible');
    } else {
      revealObserver.observe(el);
    }
  });

  /* --------------------------------------------------------------------------
     5. Hosted Projects Showcase - Year & Category Filtering + Date Sorting
     -------------------------------------------------------------------------- */
  const rotaYearSelect = document.getElementById('rotaYearSelect');
  const currentYearBadge = document.getElementById('currentYearBadge');
  const currentYearText = document.getElementById('currentYearText');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.getElementById('projectsGrid');

  // Determine latest year with available project data by default
  const getLatestYearWithData = () => {
    if (typeof HOSTED_PROJECTS !== 'undefined' && HOSTED_PROJECTS.length > 0) {
      const yearsWithData = [...new Set(HOSTED_PROJECTS.map(p => p.rotaYear))];
      if (yearsWithData.length > 0) {
        return yearsWithData.sort().pop();
      }
    }
    return '25-26';
  };

  let currentYear = rotaYearSelect ? rotaYearSelect.value : getLatestYearWithData();
  let currentCategory = 'all';

  // Helper to format year code (e.g. "25-26" -> "2025–26")
  const formatYearLabel = (yearCode) => {
    if (typeof ROTA_YEARS !== 'undefined') {
      const found = ROTA_YEARS.find(y => y.code === yearCode);
      if (found) return found.label;
    }
    const parts = yearCode.split('-');
    if (parts.length === 2) {
      return `20${parts[0]}–${parts[1]}`;
    }
    return yearCode;
  };

  // Render HTML for a single project card
  const createProjectCardHTML = (project) => {
    const collabHTML = project.collaborators && project.collaborators.length > 0
      ? `<div class="collab-badge">In Collaboration with ${project.collaborators.join(', ')}</div>`
      : '';

    const objectivesHTML = project.objectives.map(obj => `<li>${obj}</li>`).join('');

    return `
      <div class="project-card fade-in visible" data-category="${project.categorySlug}" data-year="${project.rotaYear}" tabindex="0">
        <div class="card-default-view">
          <div class="project-card-header">
            <span class="category-badge">${project.category}</span>
            <span class="hosted-tag">Hosted</span>
          </div>
          <h3 class="project-title">${project.name}</h3>
          <p class="project-description">${project.shortDescription}</p>
          <div class="project-meta-grid">
            <div class="meta-item">
              <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${project.date} <span class="day-badge">• ${project.day}</span></span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${project.time}</span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${project.venue}</span>
            </div>
          </div>
          <div class="card-trigger">
            <span>View Objectives</span>
            <svg class="trigger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
        
        <div class="project-overlay">
          <div class="overlay-header">
            <span class="overlay-label">PROJECT OBJECTIVES</span>
            <h4 class="overlay-title">${project.name}</h4>
            ${collabHTML}
          </div>
          <ul class="objectives-list">
            ${objectivesHTML}
          </ul>
        </div>
      </div>
    `;
  };

  // Render HTML for empty state when no projects match year/category
  const createEmptyStateHTML = (yearLabel) => {
    return `
      <div class="projects-empty-state fade-in visible">
        <div class="empty-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <h3 class="empty-title">No Hosted Projects Yet</h3>
        <p class="empty-description">We haven't added any hosted projects for Rota Year <span class="empty-year-name">${yearLabel}</span> yet. Please check back soon or select another Rota Year.</p>
      </div>
    `;
  };

  // Main Render Function
  const renderProjects = () => {
    if (!projectsGrid || typeof HOSTED_PROJECTS === 'undefined') return;

    // 1. Filter projects by Year + Category
    const filtered = HOSTED_PROJECTS.filter(project => {
      const matchYear = project.rotaYear === currentYear;
      const matchCategory = currentCategory === 'all' || project.categorySlug === currentCategory;
      return matchYear && matchCategory;
    });

    // 2. Sort filtered projects chronologically descending (latest date first)
    filtered.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

    // 3. Update UI year labels
    const yearLabel = formatYearLabel(currentYear);
    if (currentYearBadge) currentYearBadge.textContent = `ROTA YEAR ${yearLabel}`;
    if (currentYearText) currentYearText.textContent = yearLabel;

    // 4. Smooth grid transition
    projectsGrid.style.opacity = '0.4';
    projectsGrid.style.transform = 'translateY(6px)';

    setTimeout(() => {
      if (filtered.length > 0) {
        projectsGrid.innerHTML = filtered.map(createProjectCardHTML).join('');
      } else {
        projectsGrid.innerHTML = createEmptyStateHTML(yearLabel);
      }
      projectsGrid.style.opacity = '1';
      projectsGrid.style.transform = 'translateY(0)';
    }, 150);
  };

  // Year Dropdown Event Listener
  if (rotaYearSelect) {
    rotaYearSelect.value = currentYear;

    rotaYearSelect.addEventListener('change', (e) => {
      currentYear = e.target.value;
      renderProjects();
    });
  }

  // Category Filter Buttons Event Listener
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      currentCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Initial render (ensures dates are sorted latest to oldest from load)
  renderProjects();

});
