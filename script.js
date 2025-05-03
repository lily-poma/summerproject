// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
  rootElement.setAttribute('data-theme', currentTheme);
  toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// Toggle light/dark mode
toggleBtn.addEventListener('click', () => {
  const isDark = rootElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
