console.log('router.js loaded');

// Basic hash router for section navigation
function navigate() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  const section = document.getElementById(hash);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Listen for hash changes
window.addEventListener('hashchange', navigate);

// Trigger navigation on initial load
window.addEventListener('DOMContentLoaded', navigate);
