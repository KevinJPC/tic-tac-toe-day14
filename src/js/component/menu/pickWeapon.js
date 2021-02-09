import React from "react";
import PropTypes from "prop-types";

export function PickWeapon(props) {
	return (
		<div className="p-5">
			<div className="pickWeapon-container p-4">
				<div className="pickWeapon-title-container text-center">
					<h3>CHOOSE YOUR WEAPON</h3>
				</div>
				<div className="inputUsername-container d-flex justify-content-center">
					<div>
						<input placeholder="Player 1 username"></input>
					</div>
					<div>
						<input placeholder="Player 2 username"></input>
					</div>
				</div>
				<div className="selectStart-container col-5 bg-primary d-flex justify-content-between">
					<div>
						<button
							className="btnWeapon"
							onClick={() => props.handleChangeView("game")}>
							X
						</button>
					</div>
					<div>
						<button
							className="btnWeapon"
							onClick={() => props.handleChangeView("game")}>
							O
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

PickWeapon.propTypes = {
	handleChangeView: PropTypes.func
};
