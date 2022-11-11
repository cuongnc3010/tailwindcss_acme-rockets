const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleMenu = () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    mobileMenu.classList.toggle('animate-open-menu');
    mobileMenu.classList.toggle('animate-close-menu');

    hamburgerBtn.classList.toggle('toggle-btn');
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);
