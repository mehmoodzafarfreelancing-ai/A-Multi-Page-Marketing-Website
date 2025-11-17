# My Digital Agency - React Website

A modern, responsive website for a digital agency built with React and Vite. This project showcases a clean, professional web presence with multiple pages and smooth navigation.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and functional components
- **Fast Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)
- **Client-Side Routing**: Seamless navigation using React Router DOM
- **Responsive Design**: Mobile-friendly layout with custom CSS styling
- **Component-Based Structure**: Reusable Header and Footer components
- **Multiple Pages**: Home, Services, and Contact pages

## 🛠️ Tech Stack

- **React** ^19.2.0 - UI library
- **React Router DOM** ^7.9.6 - Client-side routing
- **Vite** ^7.2.2 - Build tool and dev server
- **ESLint** - Code linting and quality assurance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project2-react-website
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

- `npm run dev` - Start the development server (typically runs on `http://localhost:5173`)
- `npm run build` - Build the project for production (outputs to `dist/` folder)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
project2-react-website/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images and other assets
│   │   └── react.svg
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Navigation header component
│   │   ├── Header.css
│   │   ├── Footer.jsx     # Footer component
│   │   └── Footer.css
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Services.jsx   # Services page
│   │   ├── Contact.jsx    # Contact page
│   │   └── PageLayout.css # Shared page styles
│   ├── App.jsx            # Main app component with routing
│   ├── App.css            # App-level styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── dist/                  # Production build output
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies and scripts
```

## 🎨 Pages

- **Home** (`/`) - Landing page with agency introduction and call-to-action
- **Services** (`/services`) - Overview of services offered
- **Contact** (`/contact`) - Contact information and inquiry form

## 🚀 Development

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

3. Make changes to the code - Vite will automatically reload the page with your updates

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🌐 Deployment

The `dist/` folder contains the production-ready files. You can deploy to:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **Any static hosting service**: Upload the contents of `dist/`

## 🔍 Code Quality

This project uses ESLint for code quality and consistency. Run the linter with:

```bash
npm run lint
```

## 📝 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add a route in `src/App.jsx`:
```jsx
import NewPage from "./pages/NewPage";

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```
3. Add a navigation link in `src/components/Header.jsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Co-located CSS files (e.g., `Header.css`, `Footer.css`)
- Page styles: `src/pages/PageLayout.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

My Digital Agency

---

**Built with ❤️ using React and Vite**
