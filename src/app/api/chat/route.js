import { GoogleGenerativeAI } from "@google/generative-ai";
import { myData } from "@/app/lib/myData";
import { validateChatRequest } from "./validate.mjs";

// shortcut: no rate limit, add one if the Gemini bill or abuse grows
export async function POST(request) {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON." }, { status: 400 });
	}

	const { error, message, history } = validateChatRequest(body);
	if (error) {
		return Response.json({ error }, { status: 400 });
	}

	if (!process.env.GEMINI_API_KEY) {
		return Response.json({ error: "Chat is not configured." }, { status: 500 });
	}

	try {
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
		const model = genAI.getGenerativeModel({
			model: "gemini-2.5-flash-lite",
			systemInstruction: `You are Milo, the friendly and professional AI assistant for Oak Soe Htoo Aung (Oak). 
		Your job is to help visitors learn about Oak's skills, projects, and experience.
		
		Here is the "source of truth" about Oak: ${JSON.stringify(myData)}.
		
		Keep your responses helpful, concise, and stay in character as Milo. 
		If you don't know something, just say so politely and suggest they contact Oak directly via email.`,
		});
		const chat = model.startChat({
			history: history.map(({ role, text }) => ({ role, parts: [{ text }] })),
		});
		const result = await chat.sendMessage(message);
		return Response.json({ reply: result.response.text() });
	} catch (err) {
		console.error("Milo had a hiccup:", err);
		return Response.json({ error: "Upstream error" }, { status: 502 });
	}
}
