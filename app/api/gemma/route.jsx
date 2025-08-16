import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request) {
  try {
    const { idea } = await request.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMMA_API_KEY,
    });

    const model = "gemma-3-27b-it";

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Generate a short vivid logo design prompt for: ${idea}.`,
          },
        ],
      },
    ];

    const response = await ai.models.generateContent({ model, contents });

    console.dir(response, { depth: null }); // fully expand nested objects

    const prompt = response?.candidates?.[0]?.content?.[0]?.text || "";

    return NextResponse.json({ prompt });
  } catch (error) {
    console.error("Gemma API error:", error);
    return NextResponse.json(
      { error: "Failed to generate prompt" },
      { status: 500 }
    );
  }
}
