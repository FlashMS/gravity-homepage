console.log("github-link.js loaded");

// GitHub Identity Capsule
window.renderGithubLink = function () {
  const root = document.getElementById("github-link-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 16px;">
      <p><strong>View the Gravity Binary ecosystem on GitHub:</strong></p>

      <a href="https://github.com/FlashMS"
         target="_blank"
         style="color: #4da6ff; font-weight: bold;">
         github.com/FlashMS
      </a>

      <p style="margin-top: 8px; color: #888;">
        (Architecture • Capsules • Terraform • Azure • Homepage)
      </p>
    </div>
  `;
};
