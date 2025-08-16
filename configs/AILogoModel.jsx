import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  const { idea } = await request.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMMA_API_KEY,
  });

  const model = "gemma-3-27b-it";

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Generate a short vivid logo design prompt for: ${idea}. Return JSON with a 'prompt' field only.`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    contents,
  });

  return NextResponse.json({
    prompt: response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "",
  });
}
