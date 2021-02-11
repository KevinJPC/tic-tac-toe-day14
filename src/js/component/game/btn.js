import React from "react";
import PropTypes from "prop-types";
import { TitleApp } from "../titleApp";

export function Btn(props) {
	return (
		<div
			className={
				"btn-container rounded-0 col-4 d-flex justify-contenter-center p-0 " +
				props.borderStyle
			}>
			<button
				className={"btn " + props.weaponStyle}
				onClick={() => {
					if (!props.finished) {
						if (
							props.weaponMatrix[props.positionI][
								props.positionJ
							] == null
						) {
							let newWeaponMatrix = props.weaponMatrix;
							newWeaponMatrix[props.positionI][props.positionJ] =
								props.turn;
							props.renderTurn(newWeaponMatrix);
						}
					}
				}}>
				{props.letter}
			</button>
		</div>
	);
}

Btn.propTypes = {
	borderStyle: PropTypes.string,
	weaponMatrix: PropTypes.array,
	letter: PropTypes.string,
	renderTurn: PropTypes.func,
	turn: PropTypes.string,
	positionI: PropTypes.number,
	positionJ: PropTypes.number,
	finished: PropTypes.bool,
	weaponStyle: PropTypes.string
};
