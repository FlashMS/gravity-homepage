console.log('Gravity Binary app.js loaded');

// Simple helper to fetch JSON files
async function loadJSON(path) {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (err) {
    console.error('Error loading JSON:', path, err);
    return null;
  }
}

// Initialize all components after DOM loads
window.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing Gravity Binary homepage...');

  const projects = await loadJSON('projects.json');
  const system = await loadJSON('system.json');

  if (window.renderProjectList && projects) {
    window.renderProjectList(projects);
  }

  if (window.renderSystemStatus && system) {
    window.renderSystemStatus(system);
  }

  if (window.renderArchitectureMap) {
    window.renderArchitectureMap();
  }

  if (window.renderCloudArchitecture) {
    window.renderCloudArchitecture();
  }

  if (window.renderGithubLink) {
    window.renderGithubLink();
  }
});
