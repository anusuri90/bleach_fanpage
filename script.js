// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle logic
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  document.getElementById('openSidebar').addEventListener('click', () => {
    sidebar.style.width = '250px';
    main.style.marginLeft = '250px';
  });
  document.getElementById('closeSidebar').addEventListener('click', () => {
    sidebar.style.width = '0';
    main.style.marginLeft = '0';
  });

  // Filtering logic
  let genderFilters = [], roleFilters = [];
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const value = btn.getAttribute('data-value');
      btn.classList.toggle('active');
      // Update filter arrays
      if (btn.classList.contains('active')) {
        if (type === 'gender') genderFilters.push(value);
        else if (type === 'role') roleFilters.push(value);
      } else {
        if (type === 'gender') genderFilters = genderFilters.filter(v => v !== value);
        else if (type === 'role') roleFilters = roleFilters.filter(v => v !== value);
      }
      // Show/hide cards
      document.querySelectorAll('.character-card').forEach(card => {
        let match = true;
        const cardGender = card.getAttribute('data-gender');
        const cardRole   = card.getAttribute('data-role');
        if (genderFilters.length && !genderFilters.includes(cardGender)) match = false;
        if (roleFilters.length && !roleFilters.includes(cardRole)) match = false;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  // Cookie consent popup hide logic
  const cookieBox = document.getElementById('cookieConsent');
  document.getElementById('acceptBtn').addEventListener('click', () => {
    cookieBox.style.display = 'none';
  });
  document.getElementById('declineBtn').addEventListener('click', () => {
    cookieBox.style.display = 'none';
  });
});
