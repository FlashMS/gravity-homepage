console.log("system-status.js loaded");

window.renderSystemStatus = function (system) {
  const root = document.getElementById("system-status-root");
  if (!root) return;

  if (!system) {
    root.innerHTML = `<p>System status unavailable.</p>`;
    return;
  }

  root.innerHTML = `
    <div style="padding: 10px;">
      <p><strong>System Health:</strong> ${system.health}</p>
      <p><strong>Last Updated:</strong> ${system.lastUpdated}</p>
      <p><strong>Active Capsules:</strong> ${system.activeCapsules}</p>
      <p><strong>Version:</strong> ${system.version}</p>
    </div>
  `;
};
