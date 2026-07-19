document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remove active state from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // 2. Hide all layout content panels
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // 3. Add active state to the clicked button
      button.classList.add('active');

      // 4. Show target layout panel based on data-target attribute
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
});









// Toggle mobile menu view dynamically
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('nav ul');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show-menu');
      
      // Fun bonus: Swap out the bar icon text for a clean 'X' close state
      if (navLinks.classList.contains('show-menu')) {
        menuToggle.innerHTML = '✕';
      } else {
        menuToggle.innerHTML = '☰';
      }
    });
  }
});