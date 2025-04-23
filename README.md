# Weather AI Chatbot 🌦️

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini-4285F4?style=flat-square&logo=google)](https://deepmind.google/technologies/gemini/)
[![Built with Hono](https://img.shields.io/badge/Built%20with-Hono-E6E6E6?style=flat-square)](https://hono.dev/)

A smart AI-powered weather chatbot that provides accurate weather information through natural conversation. Simply chat about any location's weather, and get instant, detailed responses!

## ✨ Features

- 🗣️ Natural language understanding for weather queries
- 🌍 Global weather coverage with city and country support
- 🎯 Automatic capital city detection for country queries
- ⚡ Real-time weather data integration
- 💬 Conversational interface with AI-powered responses

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Hono (fast & lightweight server framework)
- **AI/ML**:
  - Google Generative AI (Gemini) - Natural language processing
  - LangGraph - Intelligent conversation flow
- **Weather Data**: Tomorrow.io Weather API

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) package manager
- API keys for:
  - Tomorrow.io
  - Google Generative AI

### Backend Setup

1. Navigate to the server directory:
   ```sh
   cd server
   ```

2. Install dependencies:
   ```sh
   bun install
   ```

3. Create a `.env` file in the server directory with your API keys:
   ```env
   TOMORROW_API_KEY=your_tomorrow_api_key
   GOOGLE_API_KEY=your_google_api_key
   ```

4. Start the development server:
   ```sh
   bun run dev
   ```

   The server will be running at http://localhost:3000

### Frontend Setup

1. Navigate to the client directory:
   ```sh
   cd client
   ```

2. Install dependencies:
   ```sh
   bun install
   ```

3. Start the development server:
   ```sh
   bun run dev
   ```

   The application will be available at http://localhost:5173

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Tomorrow.io](https://www.tomorrow.io/) for weather data
- [Google Generative AI](https://deepmind.google/technologies/gemini/) for AI capabilities
- [LangGraph](https://github.com/langchain-ai/langgraph) for conversation flow management