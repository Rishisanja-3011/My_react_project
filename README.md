# Responsive React Student Portfolio

A state-of-the-art, fully responsive, and glassmorphic Student Portfolio built with **React**, **React Router v6**, and **Vite**.

## 🚀 Key Features

- **Client-Side Routing**: Smooth, multi-page routing via `react-router-dom` with zero page reloads.
- **Dynamic Theming**: Custom header background color picker state along with a persistent, system-integrated dark/light mode toggle.
- **Controlled Contact Form**: Stateful form capturing user input in real-time, complete with a dynamic character counter (limit 500 characters) and togglable help/writing advice tooltip.
- **404 Fallback page**: Custom, polished 404 Error screen with single-click navigation redirecting back to home.
- **Glassmorphic UI**: High-end modern styling utilizing CSS variables, responsive grids, hover-scale animations, and backdrop-blur filters.

---

## 📁 Project Architecture & Routes

```text
my-react-app/
├── src/
│   ├── main.jsx          # Entry point (wrapped in BrowserRouter)
│   ├── App.jsx           # Main App coordinator managing routes
│   ├── App.css           # Component layouts and style presets
│   ├── index.css         # Global tokens and light/dark theme variables
│   └── components/       # Custom page and layout components
│       ├── Home.jsx      # Home route (renders Header, About, Skills)
│       ├── Projects.jsx  # Projects showcase page route
│       ├── Contact.jsx   # Contact form page route (controlled state)
│       ├── NotFound.jsx  # Fallback 404 error page route
│       ├── Header.jsx    # Hero header section with theme picking
│       ├── About.jsx     # Personal profile details
│       ├── Skills.jsx    # Tech pill listing tags
│       ├── NavBar.jsx    # Responsive header navigation
│       └── Footer.jsx    # Copywriter footer section
```

### Route Definitions
- `Route: "/"` → Renders the homepage layout, profile details, and tech skills.
- `Route: "/projects"` → Renders the portfolio projects showcase page.
- `Route: "/contact"` → Renders the controlled contact form page.
- `Route: "*"` → Renders a custom 404 Page Not Found error card.

---

## 🛠️ Technical Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Routing Engine**: React Router v6 (`react-router-dom`)
- **Styling**: Pure Custom CSS (utilizing CSS custom properties, backdrop-filters, and media queries)
- **Formatting & Linting**: ESLint, Prettier

---

## 💻 Local Setup & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rishisanja-3011/My_react_project.git
   cd my-react-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the specified local port) in your browser.

4. **Run Linter**:
   ```bash
   npm run lint
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```
