# Chetan Sharma - Portfolio

Plain HTML, CSS, and JavaScript. No build step, no dependencies.

## Run locally (VS Code)
1. Open this folder in VS Code (`File > Open Folder`).
2. Install the **Live Server** extension, right-click `index.html`, choose **Open with Live Server**.
   Or just double-click `index.html` to open it in your browser (no server needed).
   Optional, if you have Node.js: `npx serve .` in the VS Code terminal.

## Edit content
- **Projects**: edit the `PROJECTS` array at the top of `script.js` (add one object per project). The new project "ContentCraft - AI Content Studio" is already added.
- **Skills**: edit the `SKILLS` object in `script.js`.
- **Text, experience, contact**: edit `index.html`.
- **Photo**: replace `assets/profile.jpg`.

## Features
- ✨ Interactive project filtering, search with live search
- ✨ 3D card tilt effect on mouse
- ✨ Gradient animated hero title with gradient text effect
- ✨ Enhanced hover effects with magnetic buttons
- ✨ Animated grid background pattern
- ✨ Smooth scroll progress bar
- ✨ Enhanced scroll reveal animations
- ✨ Theme toggle with smooth animation and particle effects
- ✨ Particle canvas with dynamic connections
- ✨ Typed.js-like hero typing animation
- ✨ Mobile-responsive design
- ✨ Accessible with ARIA labels and keyboard navigation

## Local Development Features
- No build step - just open `index.html` directly in browser
- Fast live reloading with Live Server extension
- Responsive design works on all devices
- Enhanced animations with performance optimization
- Supports reduced motion preferences (respects user settings)

## Deploy publicly on GitHub Pages

### Method 1: Using GitHub CLI (recommended)
```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/chetansharma06/portfolio.git
git push -u origin main
```

### Method 2: Manual GitHub Upload
1. Go to [GitHub](https://github.com) and create a new repository
2. Upload your portfolio files (everything inside the `portfolio/` folder, not the `portfolio/` folder itself)
3. Initialize repository with README
4. Push existing commits to main branch

### GitHub Pages Setup
1. In your GitHub repository, go to **Settings**
2. Scroll down to "Pages" section
3. Under "Source", select **Deploy from a branch**
4. Choose branch: **main**
5. For "Folder", select **/(root)**
6. Click **Save**
7. Wait about a minute for deployment

Your site will be live at: `https://chetansharma06.github.io/portfolio/`

## Project Details

This portfolio showcases Chetan Sharma's projects in Machine Learning, Generative AI, Agentic AI, and Computer Vision. Each project includes:

- **Project title and description**
- **Live demo link** (if available)
- **GitHub repository link**
- **Technology stack** used in the project
- **Key features and achievements**

### New Project: ContentCraft - AI Content Studio
**Category:** Generative AI
**Description:** An AI-powered content creation studio that generates polished blog posts, social media copy, newsletters and marketing content with your brand voice, SEO optimization and multi-platform formatting.

**Technologies:** Python, LangChain, Groq, OpenAI, Streamlit, Pinecone, Tavily, Pandas, FastAPI, Docker

## Customization

### Adding New Projects
To add a new project:
1. Open `script.js`
2. Find the `PROJECTS` array
3. Add a new project object (copy and edit the "ContentCraft" project as template)
4. Include:
   - `title`: Project name
   - `cat`: Category (from CATS array)
   - `date`: Month and year
   - `desc`: Description
   - `bullets`: Array of bullet points
   - `tech`: Array of technologies
   - `gh`: GitHub repository URL (optional)

### Adding New Skills
To add a new skill:
1. Open `script.js`
2. Find the `SKILLS` object
3. Add a new category and list of skills

### Theme Colors
You can customize the theme colors by modifying these CSS variables in `style.css`:
- `--ac`: Main accent color (default: #4f46e5)
- `--gradient-start`: Gradient start (default: #4f46e5)
- `--gradient-end`: Gradient end (default: #818cf8)

## Technical Notes

- Built with modern vanilla JavaScript - no external dependencies
- Uses IntersectionObserver API for scroll animations
- Responsive design with CSS Grid and Flexbox
- Optimized for performance with requestAnimationFrame
- Supports both light and dark themes
- Includes particle system using HTML Canvas
- Advanced hover effects with CSS transforms
- Enhanced typography and accessibility
- Enhanced animations with smooth easing functions
- Mobile-first approach with adaptive breakpoints
- Performance optimized for fast loading
- Interactive UI with minimal JavaScript

## License

This portfolio is open source and available under the MIT License.