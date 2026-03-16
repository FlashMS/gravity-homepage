Gravity Homepage

The public-facing homepage for vscgravity.com. Built as a clean, fast, and modular Azure Static Web App. This site serves as the primary entry point for recruiters, engineers, and collaborators exploring my cloud, automation, and capsule-based engineering work.

Live Deployment:
https://vscgravity.com

Overview:
This homepage is designed to be professional, technical, and identity-driven. It acts as a central hub linking to architecture repositories, capsule implementations, cloud engineering projects, and professional identity.

Architecture Summary:
The homepage is deployed as an Azure Static Web App. It uses GitHub Actions for CI/CD, Azure-managed SSL, and custom domain binding. The site is static HTML/CSS/JS optimized for speed and clarity.

Architecture Diagram (ASCII):
Azure Static Web App
- HTML/CSS/JS frontend
- GitHub Actions CI/CD
- Custom domain: vscgravity.com

Deployment Workflow:
1. Push to main branch triggers GitHub Actions.
2. Azure Static Web Apps builds and deploys the site.
3. CDN cache is invalidated and the live endpoint updates.
4. Domain binding is handled through Azure.

Manual Deployment Command:
az staticwebapp upload --name gravity-homepage --source .

Local Development Command:
swa start ./ --api-location api

Project Structure:
index.html
assets/css
assets/js
assets/images
project-cards
README.md

Features:
- Clean, modern landing page
- Project cards linking to flagship repos
- Capsule ecosystem overview
- Architecture summaries
- Mobile-optimized layout
- Fast load times

Security:
- HTTPS enforced
- Azure-managed certificates
- No backend attack surface
- No exposed secrets

Contact:
Visit https://vscgravity.com for professional contact and portfolio access.

License:
This project is provided as part of my professional portfolio. Content may be reused with attribution.
