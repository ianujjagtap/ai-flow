# AI Flow Backend API

The backend REST API for the AI Flow application. Built with Node.js, Express, TypeScript, and Mongoose. It seamlessly connects with MongoDB for database persistence and OpenRouter for routing AI requests to models like Gemini.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Validation**: Zod
- **AI Integration**: OpenRouter API
- **Security & Utilities**: Helmet, CORS, Rate Limiting, Morgan

## Getting Started

### Installation
Run the following command to install the required backend dependencies:
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root of the `server` directory with the following variables:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ai_flow
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=google/gemini-2.0-flash-lite-preview-02-05:free
CLIENT_ORIGIN=http://localhost:5173
```

### Scripts

- `npm run dev` - Starts the development server using `ts-node-dev` with hot-reloading.
- `npm run build` - Compiles the TypeScript codebase to JavaScript in the `dist` directory and resolves path aliases.
- `npm start` - Runs the production build from the `dist` folder.
- `npm run check` / `npm run lint` / `npm run format` - Uses Biome to format and lint the code.

## Production Deployment
The backend is designed to be easily deployed to containerized platforms or PaaS like Render. To run the server in production, ensure `NODE_ENV` is set to `production`, execute `npm run build`, and then start the server with `npm start`.
