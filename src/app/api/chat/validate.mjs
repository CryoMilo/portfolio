const MAX_TEXT = 1000;
const MAX_HISTORY = 20;

export function validateChatRequest(body) {
	const message = typeof body?.message === "string" ? body.message.trim() : "";
	if (message.length < 1 || message.length > MAX_TEXT) {
		return { error: "Message must be 1-1000 characters." };
	}

	let history = [];
	if (body.history !== undefined) {
		if (!Array.isArray(body.history)) {
			return { error: "History must be an array." };
		}
		history = body.history
			.filter(
				(item) =>
					item &&
					(item.role === "user" || item.role === "model") &&
					typeof item.text === "string"
			)
			.map((item) => ({ role: item.role, text: item.text.slice(0, MAX_TEXT) }))
			.slice(-MAX_HISTORY);
	}

	return { message, history };
}
