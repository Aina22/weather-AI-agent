## Description
🌦️ A smart AI chatbot that provides weather information through natural conversation! Simply ask about the weather for any location, and the AI will respond with accurate weather details.

Built with:
- 🦜 LangGraph - For creating an intelligent conversational flow
- 🤖 Google Generative AI (Gemini) API - Powering the natural language understanding
- ⚛️ React - For the interactive frontend interface
- 🔥 Hono - Fast and lightweight server framework
- 🌡️ Tomorrow.io Weather API - For real-time weather data

The chatbot can understand city-specific queries or automatically detect capital cities when you ask about countries. Just start chatting naturally about the weather anywhere in the world!

## installation
Install your server dependencies:
```sh
cd server
```
```sh 
bun install
```

To run:
```sh
bun run dev
```

Open http://localhost:3000

Add your API in .env file in server file: 
TOMORROW_API_KEY=
GOOGLE_API_KEY=

Install your client dependencies:

```sh
cd client
```

```sh
bun install
```

```sh
bun run dev
```
Open http://localhost:5173/
