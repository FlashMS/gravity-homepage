console.log("architecture-map.js loaded");

window.renderArchitectureMap = function () {
  const root = document.getElementById("architecture-map-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 10px;">
      <p><strong>Gravity Binary Architecture Map</strong></p>
      <ul style="line-height: 1.6;">
        <li>Homepage Capsule</li>
        <li>Validator Capsule</li>
        <li>Wallet Capsule</li>
        <li>Execution Engine</li>
        <li>Provenance Pipeline</li>
      </ul>
      <p style="color: #888;">(Static placeholder — dynamic map coming in v0.2)</p>
    </div>
  `;
};
