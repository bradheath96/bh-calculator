export const btnValues = [
	["C", "+-", "%", "/"],
	[7, 8, 9, "X"],
	[4, 5, 6, "-"],
	[1, 2, 3, "+"],
	[0, ".", "="],
];

export const toLocaleString = (num) =>
	String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

export const removeSpaces = (num) =>
	num ? num.toString().replace(/\s/g, "") : "";

