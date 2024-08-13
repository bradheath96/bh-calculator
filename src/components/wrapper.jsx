import { useState } from "react";
import Screen from "./Screen.jsx";
import ButtonBox from "./ButtonBox.jsx";
import { btnValues, toLocaleString, removeSpaces } from "../utils/helpers.jsx";
import {
	useResetClick,
	useNumClick,
	useInvertClick,
	usePercentClick,
	useEqualsClick,
	useOperatorClick,
	useDotClick,
} from "../hooks/clickHandlers.jsx";
import "./css/Wrapper.css";

const Wrapper = () => {
	let [calc, setCalc] = useState({
		sign: "",
		num: 0,
		res: 0,
	});

	const resetClickHandler = useResetClick(setCalc);
	const numClickHandler = useNumClick(calc, setCalc);
	const invertClickHandler = useInvertClick(calc, setCalc);
	const percentClickHandler = usePercentClick(calc, setCalc);
	const equalsClickHandler = useEqualsClick(calc, setCalc);
	const operatorClickHandler = useOperatorClick(calc, setCalc);
	const dotClickHandler = useDotClick(calc, setCalc);

	return (
		<div className="wrapper">
			<Screen value={calc.num ? calc.num : calc.res} />
			<ButtonBox
				resetClickHandler={resetClickHandler}
				numClickHandler={numClickHandler}
				invertClickHandler={invertClickHandler}
				percentClickHandler={percentClickHandler}
				equalsClickHandler={equalsClickHandler}
				operatorClickHandler={operatorClickHandler}
				dotClickHandler={dotClickHandler}
			/>
		</div>
	);
};

export default Wrapper;
