console.log("cloud-architecture.js loaded");

// Gravity Binary Cloud Architecture Capsule
window.renderCloudArchitecture = function () {
  const root = document.getElementById("cloud-architecture-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 16px;">
      <p><strong>Cloud Deployment Model</strong></p>

      <ul style="line-height: 1.6; margin-left: 12px;">

        <li><strong>Azure Resource Group</strong>
          <ul>
            <li>GravityBinaryRG</li>
          </ul>
        </li>

        <li><strong>Compute Layer</strong>
          <ul>
            <li>Azure Container Apps</li>
            <li>Validator Capsule</li>
            <li>Wallet Capsule</li>
            <li>Execution Engine Capsule</li>
            <li>Welcome Capsule</li>
          </ul>
        </li>

        <li><strong>Frontend Layer</strong>
          <ul>
            <li>Static Web App: gravity-homepage</li>
            <li>Public site: vscgravity.com</li>
          </ul>
        </li>

        <li><strong>Infrastructure-as-Code</strong>
          <ul>
            <li>Terraform Ascent Showcase</li>
            <li>Azure IaC Modules</li>
            <li>Deterministic deployment workflows</li>
          </ul>
        </li>

        <li><strong>Networking & Identity</strong>
          <ul>
            <li>DNS Zone: vscgravity.com</li>
            <li>Azure Entra ID (App Registrations)</li>
            <li>Container App ingress rules</li>
          </ul>
        </li>

        <li><strong>Capsule Deployment Model</strong>
          <ul>
            <li>Homepage Capsule → Static Web App</li>
            <li>Backend Capsules → Container Apps</li>
            <li>Execution Engine → Container App</li>
            <li>Validator + Wallet → Container Apps</li>
          </ul>
        </li>

      </ul>

      <p style="color: #888; margin-top: 12px;">
        (v0.2 — deterministic cloud map)
      </p>
    </div>
  `;
};

