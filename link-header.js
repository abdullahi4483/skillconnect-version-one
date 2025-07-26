// link-header-start
  const navLinks = document.querySelectorAll('.active-link');
  const currentURL = window.location.href;

  navLinks.forEach(link => {
    if (currentURL.includes(link.href)) {
      link.classList.add('active');
    }
  });
  // link-header-end