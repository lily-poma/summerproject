const rootElement = document.documentElement;

function initJavascript() {
  console.log("Javascript loaded");
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme == null) {
    rootElement.setAttribute('data-theme', "light");
  } else {
    rootElement.setAttribute('data-theme', currentTheme);
  }
  
  document.getElementById("theme-toggle").innerHTML = currentTheme === 'dark' ? '🌜' : '🌞';
}

// Theme Toggle



//rootElement.setAttribute('data-theme', currentTheme);

function themeToggle() {
  console.log('Toggle Theme Button Pressed');
  const isDark = rootElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  //toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  document.getElementById("theme-toggle").innerHTML = newTheme === 'dark' ? '🌜' : '🌞';
}