# Volt Project

Volt Project is a modern React + Vite web application designed for rapid development and easy deployment. It features a modular structure with reusable components, configuration-driven navigation, and clean layouts for scalable web projects.

## Features
- Built with React, Vite, and TypeScript
- Modular folder structure for easy maintenance
- Reusable UI components (Button, Navbar, Footer, Service Card)
- Config-driven navigation and content
- Ready-to-use pages: Home, About Us, Services, Case Studies, Contact
- Asset management for images and static files

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/volt-project.git
   cd volt-project
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Development Server
Start the app locally:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production
To build the app for production:
```sh
npm run build
```
The output will be in the `dist/` folder.

### Project Structure
```
volt-project/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images and media
│   ├── component/       # Reusable UI components
│   ├── config/          # Config files for navigation, content, etc.
│   ├── data/            # Type definitions
│   ├── layout/          # Main layout component
│   ├── navigation/      # Navigation items
│   └── pages/           # Page components
├── index.html           # Main HTML file
├── package.json         # Project metadata and scripts
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

### Deployment
This project is ready for deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). See `vercel.json` for Vercel configuration.

## Contributing
Feel free to fork the repo, create issues, or submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.

---
For any questions or support, please contact the maintainer or open an issue on GitHub.
