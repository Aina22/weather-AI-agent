import { tool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { z } from "zod";
import { MemorySaver } from "@langchain/langgraph";

const checkpointSaver = new MemorySaver();
const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.0-flash",
  maxOutputTokens: 2048,
});

const weather = tool(
  async ({ city }) => {
    // add api call to get the weather
    console.log("city", city);
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${process.env.TOMORROW_API_KEY}`
    );
    const data = await response.json();
    return data;
  },
  {
    name: "weather",
    description: `You are a helpful AI weather assistant.
When a user asks for the weather in a specific country, check if they mention a specific city.

If a city is provided, give the current weather for that city.

If no city is mentioned, find the capital city of the country and give the weather for the capital instead.
Make sure to clearly mention the name of the city (either the one provided or the capital).
Be friendly, concise, and accurate.`,
    schema: z.object({
      city: z.string().describe("The city to get the weather for"),
    }),
  }
);

export const agent = createReactAgent({
  llm: model,
  tools: [weather],
  checkpointSaver,
});
