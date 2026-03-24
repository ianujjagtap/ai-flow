# AI Flow Frontend

The frontend interface for the AI Flow App, built with React, TypeScript, Vite, and Tailwind CSS. It provides a sleek, modern UI for interacting with AI models and visualizing flows.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS, Shadcn UI, Class Variance Authority
- **State Management**: Zustand
- **Flow Visualization**: React Flow (`@xyflow/react`)
- **Linting & Formatting**: ESLint & Biome

## Getting Started

### Installation
Run the following command to install dependencies:
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root of the `client` directory:
```env
VITE_API_URL=http://localhost:5000
```

### Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Type-checks the code and builds for production.
- `npm run lint` - Runs ESLint to find issues in your code.
- `npm run preview` - Locally previews the production build.

## Building for Production
The application is fully optimized for production environments like Vercel. Running `npm run build` will output the static assets to the `dist` folder.
