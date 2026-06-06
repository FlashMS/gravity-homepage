console.log("system-status.js loaded");

// Gravity Binary System Status Capsule
window.renderSystemStatus = function (system) {
  const root = document.getElementById("system-status-root");
  if (!root) return;

  if (!system) {
    root.innerHTML = `
      <p>System status unavailable.</p>
    `;
    return;
  }

  root.innerHTML = `
    <div style="padding: 16px;">
      <p><strong>System Health:</strong> ${system.health}</p>
      <p><strong>Active Capsules:</strong> ${system.activeCapsules}</p>
      <p><strong>Version:</strong> ${system.version}</p>
      <p><strong>Environment:</strong> ${system.environment}</p>
      <p><strong>Last Updated:</strong> ${system.lastUpdated}</p>

      <p style="margin-top: 12px; color: #4da3ff;">
        Runtime stable — deterministic capsule environment active.
      </p>
    </div>
  `;
};
