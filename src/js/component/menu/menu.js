import React from "react";
import PropTypes from "prop-types";
import { TitleApp } from "../titleApp";
import { PickWeapon } from "./pickWeapon";

export function Menu(props) {
	return (
		<div className="menu-container">
			<TitleApp />
			<div className="subtitle-container text-center">
				<h3>Pick A Weapon </h3>
			</div>
			<PickWeapon handleChangeView={props.handleChangeView} />
		</div>
	);
}

Menu.propTypes = {
	handleChangeView: PropTypes.func
};
