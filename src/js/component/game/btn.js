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
			<button className="btn">O</button>
		</div>
	);
}

Btn.propTypes = {
	borderStyle: PropTypes.string
};
