console.log("github-link.js loaded");

window.renderGithubLink = function () {
  const root = document.getElementById("github-link-root");
  if (!root) return;

  root.innerHTML = `
    <div style="padding: 10px;">
      <p>View the full Gravity Binary source code and architecture on GitHub:</p>
      <a href="https://github.com/tokabg"
         target="_blank"
         style="color: #4da6ff; font-weight: bold;">
         github.com/tokabg
      </a>
    </div>
  `;
};
