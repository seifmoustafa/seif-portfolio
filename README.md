# Seif Moustafa Portfolio

Welcome to my personal portfolio repository! This project showcases my work and experience as a **Full‑Stack Developer** with expertise in **Flutter**, **React**, and **.NET Core**. It features a modern UI/UX, smooth animations, dark mode, and a wave-themed hero section.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Customization](#customization)
- [Contact](#contact)
- [License](#license)

---

## Demo

> **Live Link**: [Your deployed site URL here]  
> *(Example: https://seifmoustafa.vercel.app )*

<p align="center">
  <img src="https://user-images.githubusercontent.com/XXXX/portfolio-hero-screenshot.png" alt="Portfolio Hero Screenshot" width="600">
</p>

*(Add one or more screenshots or a GIF demonstrating your portfolio.)*

---

## Features

- **Modern Next.js App Router**: Harnesses the performance and flexibility of Next.js 15+.
- **Responsive Design**: Ensures the layout looks great on mobile, tablet, and desktop.
- **Tailwind CSS**: Rapid UI development with a clean utility-based approach.
- **Framer Motion**: Smooth fade and slide animations on scroll and transitions.
- **Dark Mode**: Toggle between light and dark themes with a single click.
- **Wave-Themed Hero**: Eye-catching wave background generated via [GetWaves](https://getwaves.io/).
- **Smooth Scrolling**: Jump to different sections via navbar anchor links.
- **Projects Section**: Showcases your real-world and practice projects with GitHub and live links.

---

## Getting Started

1. **Clone** this repository:

   ```bash
   git clone https://github.com/USERNAME/seif-portfolio.git
   cd seif-portfolio
   ```

2. **Install** dependencies:

   ```bash
   npm install
   ```
   or  
   ```bash
   yarn install
   ```

3. **Start** the development server:

   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## Project Structure

```
seif-portfolio
├─ app
│  ├─ globals.css         // Global Tailwind & basic styles
│  ├─ layout.tsx          // Root layout for Next.js
│  └─ page.tsx            // Homepage route (single-page portfolio)
├─ components
│  ├─ Navbar.tsx          // Top navigation bar
│  ├─ Hero.tsx            // Wave-themed hero section
│  ├─ About.tsx           // About me section
│  ├─ Experience.tsx      // Skills/experience section
│  ├─ Projects.tsx        // Projects grid
│  ├─ Contact.tsx         // Contact/social links
│  └─ Footer.tsx          // Page footer
├─ lib
│  └─ projects.ts         // Example data for your projects
├─ public
│  └─ images/             // Store static images, if any
├─ tailwind.config.ts     // Tailwind CSS config
├─ postcss.config.js      // PostCSS + autoprefixer config
├─ tsconfig.json          // TypeScript configuration
├─ package.json
└─ README.md              // This file
```

- **app/**: Uses the Next.js App Router (introduced in Next 13+).  
- **components/**: Modular React components for each portfolio section.  
- **lib/**: Placeholder for data or utility functions (e.g., the `projects` array).

---

## Scripts

In **package.json**, the primary scripts are:

- **`dev`**: Starts the development server on [http://localhost:3000](http://localhost:3000).  
  ```bash
  npm run dev
  ```
- **`build`**: Creates an optimized production build in the `.next` folder.  
  ```bash
  npm run build
  ```
- **`start`**: Runs the production server (after a build).  
  ```bash
  npm start
  ```
- **`lint`**: Runs ESLint to analyze code for potential errors and maintain code quality.  
  ```bash
  npm run lint
  ```

---

## Technologies Used

- **[Next.js 15+](https://nextjs.org/)**: React framework for server-rendered or static web apps.  
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for safer, more maintainable code.  
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS for rapid and consistent UI development.  
- **[PostCSS + Autoprefixer](https://postcss.org/)**: Automated CSS transformations and vendor prefixing.  
- **[Framer Motion](https://www.framer.com/motion/)**: Smooth animations and transitions for React apps.  
- **[React Icons](https://react-icons.github.io/react-icons/)**: Convenient set of SVG icons for React.  
- **[GetWaves](https://getwaves.io/)**: Used to generate the wave background SVG in the Hero section.

---

## Customization

1. **Change Wave**  
   - Open **Hero.tsx**.  
   - Replace the `<svg>` path with a new shape from [GetWaves](https://getwaves.io/).  
   - Adjust the `fill` color or add overlays for different effects.

2. **Update Projects**  
   - Open **lib/projects.ts**.  
   - Modify or add entries in the `projects` array.  
   - Each entry has `title`, `desc`, `github`, and `link`.

3. **Color Scheme**  
   - Edit **tailwind.config.ts** under `theme.extend.colors`.  
   - Change `background`, `primary`, `navy`, etc. to match your branding.

4. **Sections**  
   - Add or remove sections in **page.tsx**.  
   - Create new files in **components/** for additional sections like a Resume or Blog.

5. **Dark Mode Defaults**  
   - In the **Navbar** or a dedicated context, you can force dark mode on by default or sync it with the user’s system preferences.

---

## Contact

Feel free to reach out if you have any questions, ideas, or potential collaborations!

- **LinkedIn**: [linkedin.com/in/seif-moustafa-60115f/](https://www.linkedin.com/in/seif-moustafa-60115f/)  
- **GitHub**: [github.com/seifmoustafa](https://github.com/seifmoustafa)  
- **Email**: [youremail@example.com](mailto:youremail@example.com)

---

## License

This project is open-sourced under the [MIT License](LICENSE). Feel free to use it, modify it, and distribute as you wish. If you find it helpful, a mention or star on GitHub is always appreciated!

---

### Thank You!

Thanks for checking out my portfolio repo! If you enjoy it or find it useful, consider **starring** the project on GitHub. Happy coding!
