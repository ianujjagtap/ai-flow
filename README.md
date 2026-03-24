# AI Flow App

A modern, full-stack web application designed for seamlessly managing AI flows. This project is built using a MERN-like stack featuring React, TypeScript, Express, and MongoDB, integrating tightly with OpenRouter for AI completions.

## Project Structure

The repository is structured as a monorepo containing both the frontend and backend applications:

- [`/client`](./client) - The frontend React application built with Vite and Tailwind CSS.
- [`/server`](./server) - The backend REST API built with Express, TypeScript, and MongoDB.

## Getting Started

To run the entire project concurrently from the root directory:

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (Atlas or local)
- OpenRouter API Key

### Installation

1. Clone the repository and install root dependencies:
   ```bash
   npm install
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Setup environment variables:
   - Create a `.env` in the `server` directory (reference `server/README.md`)
   - Create a `.env` in the `client` directory (reference `client/README.md`)

### Running the App

You can run both the frontend and backend simultaneously using the concurrent scripts from the root directory:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000` (or your configured port)
- Frontend development server on `http://localhost:5173`

### Build for Production

To build both client and server for production:

```bash
npm run build
```

This command builds the React application and compiles the TypeScript server code.

## License

ISC License
