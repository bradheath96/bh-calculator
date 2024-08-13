import { toLocaleString, removeSpaces } from "../utils/helpers";

export const useNumClick = (calc, setCalc) => (event) => {
	event.preventDefault();
	const value = event.target.innerHTML;

	if (removeSpaces(calc.num).length < 16) {
		setCalc({
			...calc,
			num:
				calc.num === 0 && value === "0"
					? "0"
					: removeSpaces(calc.num) % 1 === 0
					? toLocaleString(Number(removeSpaces(calc.num + value)))
					: toLocaleString(removeSpaces(calc.num + value)),
			res: !calc.sign ? 0 : calc.res,
		});
	}
};

export const useDotClick = (calc, setCalc) => (e) => {
	e.preventDefault();
	const value = e.target.innerHTML;

	setCalc({
		...calc,
		num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
	});
};

export const useOperatorClick = (calc, setCalc) => (e) => {
	e.preventDefault();
	const value = e.target.innerHTML;

	setCalc({
		...calc,
		sign: value,
		res: !calc.res && calc.num ? calc.num : calc.res,
		num: 0,
	});
};

export const useEqualsClick = (calc, setCalc) => () => {
	if (calc.sign && calc.num) {
		const math = (a, b, sign) => {
			if (isNaN(a) || isNaN(b)) {
				return 0;
			}
			return sign === "+"
				? a + b
				: sign === "-"
				? a - b
				: sign === "X"
				? a * b
				: a / b;
		};

		const result =
			calc.num === "0" && calc.sign === "/"
				? "Can't divide by 0"
				: toLocaleString(
						math(
							Number(removeSpaces(calc.res)),
							Number(removeSpaces(calc.num)),
							calc.sign
						)
				  );

		setCalc({
			...calc,
			res: result,
			sign: "",
			num: 0,
		});
	}
};

export const usePercentClick = (calc, setCalc) => () => {
	let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
	let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

	if (isNaN(num)) num = 0;
	if (isNaN(res)) res = 0;

	setCalc({
		...calc,
		num: (num /= 100),
		res: (res /= 100),
		sign: "",
	});
};

export const useInvertClick = (calc, setCalc) => () => {
	setCalc({
		...calc,
		num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
		res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
		sign: "",
	});
};

export const useResetClick = (setCalc) => () => {
	setCalc({
		sign: "",
		num: 0,
		res: 0,
	});
};
