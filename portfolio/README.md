# Chetan Sharma - Portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run locally (VS Code)
1. Open this folder in VS Code (`File > Open Folder`).
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   Or just double-click `index.html` to open it in your browser (no server needed).
   Optional, if you have Node.js: `npx serve .` in the VS Code terminal.

## Edit content
- Projects: edit the `PROJECTS` array at the top of `script.js` (add one object per project).
- Skills: edit the `SKILLS` object in `script.js`.
- Text, experience, contact: edit `index.html`.
- Photo: replace `assets/profile.jpg`.

## Deploy publicly on GitHub Pages
```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/chetansharma06/portfolio.git
git push -u origin main
```
Then on GitHub: **Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: main, folder: / (root) > Save**.
Your site will be live at https://chetansharma06.github.io/portfolio/ after about a minute.
