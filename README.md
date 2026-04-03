# Nike 2.0 - Portfolio Project

A modern, responsive portfolio website built with React and Vite, showcasing projects and services with smooth animations and a sleek design.

**Live Demo:** https://Shuahao18.github.io/myPorti

---

## 🛠 Tech Stack

### Frontend Framework
- **React** 18.2.0 - UI library for building interactive components
- **React DOM** 18.2.0 - React rendering for web

### Build & Development
- **Vite** 4.5.9 - Lightning-fast build tool and dev server
- **@vitejs/plugin-react** 4.0.3 - React support for Vite

### Styling
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **PostCSS** 8.5.2 - CSS processing for Tailwind
- **Autoprefixer** 10.4.20 - Automatic vendor prefixes

### Animations & Effects
- **Framer Motion** 12.5.0 - Animation library for React
- **react-intersection-observer** 9.16.0 - Scroll-based animation triggers

### Code Quality
- **ESLint** 8.45.0 - Code linting
  - eslint-plugin-react 7.32.2
  - eslint-plugin-react-hooks 4.6.0
  - eslint-plugin-react-refresh 0.4.3
  - eslint-plugin-tailwindcss 3.13.0
  - eslint-config-standard 17.1.0
- **Prettier** 3.0.1 - Code formatter
- **eslint-config-prettier** 9.0.0 - Ensures ESLint and Prettier compatibility

### Deployment
- **gh-pages** 6.3.0 - Deploy to GitHub Pages

### TypeScript Support
- @types/react 18.2.15
- @types/react-dom 18.2.7

---

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # Entry point
├── index.css              # Global styles
├── assets/                # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/            # Reusable components
│   ├── Button.jsx
│   ├── Nav.jsx
│   ├── ProjectCard.jsx
│   ├── ReviewCard.jsx
│   ├── ServiceCard.jsx
│   ├── ShoeCard.jsx
│   └── techSkills.jsx
├── constants/             # App constants
├── context/               # React Context
│   └── ThemeContext.jsx
└── sections/              # Page sections
    ├── about.jsx
    ├── Contact.jsx
    ├── Hero.jsx
    ├── Project.jsx
    ├── Service.jsx
    └── Skills.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd myPorti

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors
npm run lint -- --fix
```

---

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
```

---

## ✨ Key Features

- ⚡ **Vite** - Fast build and HMR (Hot Module Replacement)
- 🎨 **Tailwind CSS** - Responsive, utility-first styling
- 🎬 **Framer Motion & Intersection Observer** - Smooth scroll animations
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Component-Based** - Reusable, maintainable components
- 🔧 **Developer Experience** - ESLint + Prettier for code quality

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 📦 Dependencies Overview

**Production:**
- react, react-dom, framer-motion, react-intersection-observer

**Development:**
- Vite, React plugins, TypeScript types, Tailwind CSS, ESLint, Prettier

---

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

---

## 📄 License

This project is open source and available under the MIT License.

