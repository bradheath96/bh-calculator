import React from "react";
import { btnValues } from "../utils/helpers.jsx";
import "./css/ButtonBox.css";

const ButtonBox = ({
	resetClickHandler,
	invertClickHandler,
	percentClickHandler,
	equalsClickHandler,
	operatorClickHandler,
	dotClickHandler,
	numClickHandler,
}) => {
	return (
		<div className="buttonBox">
			{btnValues.flat().map((button, i) => (
				<button
					key={i}
					className={button === "=" ? "equals" : "button"}
					value={button}
					onClick={
						button === "C"
							? resetClickHandler
							: button === "+-"
							? invertClickHandler
							: button === "%"
							? percentClickHandler
							: button === "="
							? equalsClickHandler
							: button === "/" ||
							  button === "+" ||
							  button === "-" ||
							  button === "X"
							? operatorClickHandler
							: button === "."
							? dotClickHandler
							: numClickHandler
					}>
					{button}
				</button>
			))}
		</div>
	);
};

export default ButtonBox;
