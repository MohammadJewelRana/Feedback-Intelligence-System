import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import config from "../config";

const model = new ChatGoogleGenerativeAI({
  apiKey: config.gemini_api_key!,
  model: "gemini-2.5-flash",
  temperature: 0,
});

export const analyzeFeedbackWithLLM = async (message: string) => {
  const prompt = `
You are a support ticket classifier.

Return ONLY valid JSON.
Do not include markdown.
Do not include explanation.

{
  "category": "Bug | Feature Request | Billing | Support | General",
  "priority": "Low | Medium | High | Critical",
  "sentiment": "Positive | Neutral | Negative",
  "team": "Technical | Billing | Support | General"
}

Feedback:
"${message}"
`;
  // console.log(prompt);

  const response = await model.invoke(prompt);

  try {
    return JSON.parse(response.content as string);
  } catch {
    // fallback if AI fails
    return {
      category: "General",
      priority: "Low",
      sentiment: "Neutral",
      team: "General",
    };
  }
};
