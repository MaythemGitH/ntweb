const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
const icon = toggleBtn.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
}
