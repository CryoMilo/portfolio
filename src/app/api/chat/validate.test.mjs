import test from "node:test";
import assert from "node:assert/strict";
import { validateChatRequest } from "./validate.mjs";

test("accepts a valid request and trims the message", () => {
	const result = validateChatRequest({
		message: "  hello  ",
		history: [{ role: "user", text: "hi" }],
	});
	assert.deepEqual(result, {
		message: "hello",
		history: [{ role: "user", text: "hi" }],
	});
});

test("rejects empty and whitespace messages", () => {
	assert.ok(validateChatRequest({ message: "" }).error);
	assert.ok(validateChatRequest({ message: "   " }).error);
});

test("rejects a 1001-character message", () => {
	assert.ok(validateChatRequest({ message: "a".repeat(1001) }).error);
	assert.equal(validateChatRequest({ message: "a".repeat(1000) }).error, undefined);
});

test("rejects non-array history", () => {
	assert.ok(validateChatRequest({ message: "hi", history: "nope" }).error);
});

test("drops malformed history items and truncates text", () => {
	const { history } = validateChatRequest({
		message: "hi",
		history: [
			{ role: "user", text: "ok" },
			{ role: "admin", text: "bad role" },
			{ role: "model" },
			null,
			"str",
			{ role: "model", text: "b".repeat(1500) },
		],
	});
	assert.equal(history.length, 2);
	assert.equal(history[1].text.length, 1000);
});

test("keeps only the last 20 history items", () => {
	const history = Array.from({ length: 25 }, (_, i) => ({ role: "user", text: String(i) }));
	const result = validateChatRequest({ message: "hi", history });
	assert.equal(result.history.length, 20);
	assert.equal(result.history[0].text, "5");
	assert.equal(result.history[19].text, "24");
});
