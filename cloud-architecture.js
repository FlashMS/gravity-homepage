console.log("cloud-architecture.js loaded");

window.renderCloudArchitecture = function () {
  const root = document.getElementById("cloud-architecture-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 10px;">
      <p><strong>Cloud Deployment Model</strong></p>
      <ul style="line-height: 1.6;">
        <li>Azure Container Apps</li>
        <li>Gravity Validator Capsule</li>
        <li>Gravity Wallet Capsule</li>
        <li>Homepage Capsule</li>
        <li>Execution Engine Capsule</li>
      </ul>
      <p style="color: #888;">(Static placeholder — dynamic cloud map coming in v0.2)</p>
    </div>
  `;
};
