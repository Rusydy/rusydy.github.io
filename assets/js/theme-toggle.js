document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const tooltip = document.getElementById('tooltip');
  const currentTheme = localStorage.getItem('theme') || 'auto';

  document.body.setAttribute('a', currentTheme);
  updateTooltipText(currentTheme);

  themeToggle.addEventListener('click', function () {
    let newTheme = 'auto';
    if (document.body.getAttribute('a') === 'light') {
      newTheme = 'dark';
    } else if (document.body.getAttribute('a') === 'dark') {
      newTheme = 'auto';
    } else {
      newTheme = 'light';
    }
    document.body.setAttribute('a', newTheme);
    localStorage.setItem('theme', newTheme);
    updateTooltipText(newTheme);
  });

  function updateTooltipText(theme) {
    if (theme === 'light') {
      tooltip.textContent = 'Switch to Dark Mode';
    } else if (theme === 'dark') {
      tooltip.textContent = 'Switch to Auto Mode';
    } else {
      tooltip.textContent = 'Switch to Light Mode';
    }
  }
});