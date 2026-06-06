kkconsole.log("architecture-map.js loaded");

// Gravity Binary Architecture Map Capsule
window.renderArchitectureMap = function () {
  const root = document.getElementById("architecture-map-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 16px;">
      <p><strong>Gravity Binary Architecture Map</strong></p>

      <ul style="line-height: 1.6; margin-left: 12px;">
        <li><strong>Invariant Layer</strong>
          <ul>
            <li>Required File Validator</li>
            <li>Directory Structure Validator</li>
            <li>Empty File Detector</li>
            <li>Path Identity Checker</li>
          </ul>
        </li>

        <li><strong>Deterministic Reasoning Layer</strong>
          <ul>
            <li>Logic Error Classifier</li>
            <li>Metadata Misalignment Detector</li>
            <li>Instruction Alignment Checker</li>
            <li>Output Validity Reasoner</li>
          </ul>
        </li>

        <li><strong>Capsule Layer</strong>
          <ul>
            <li>Validator Capsule</li>
            <li>Wallet Capsule</li>
            <li>Execution Capsule</li>
            <li>Provenance Capsule</li>
            <li>Consequence Capsule</li>
          </ul>
        </li>

        <li><strong>Human‑in‑the‑Loop Layer</strong>
          <ul>
            <li>Ambiguity Resolution</li>
            <li>Contradiction Handling</li>
            <li>API Hallucination Correction</li>
            <li>Solvability Review</li>
          </ul>
        </li>

        <li><strong>Cloud & Deployment Layer</strong>
          <ul>
            <li>Azure IaC (Terraform)</li>
            <li>Static Web Capsule</li>
            <li>DNS Capsule</li>
            <li>CI/CD Capsule</li>
          </ul>
        </li>
      </ul>

      <p style="color: #888; margin-top: 12px;">
        (v0.2 — deterministic architecture map)
      </p>
    </div>
  `;
};

