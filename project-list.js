console.log("project-list.js loaded");

window.renderProjectList = function (projects) {
  const root = document.getElementById("project-list-root");
  if (!root) return;

  if (!projects || projects.length === 0) {
    root.innerHTML = `<p>No projects found.</p>`;
    return;
  }

  const items = projects
    .map(p => `
      <div style="padding: 10px; border-bottom: 1px solid #333;">
        <strong>${p.name}</strong><br>
        <span style="color: #aaa;">${p.description}</span>
      </div>
    `)
    .join("");

  root.innerHTML = `
    <div>
      ${items}
    </div>
  `;
};
