import React from "react";
import PropTypes from "prop-types";

export function PickWeapon(props) {
	function handleChangePlayer(e) {
		let newPlayers = {
			[e.target.name]: e.target.value
		};
		props.handleChangePlayers(newPlayers);
	}
	return (
		<div className="p-lg-5 p-md-4 p-sm-1">
			<div className="pickWeapon-container p-4">
				<div className="pickWeapon-title-container text-center">
					<h3>CHOOSE YOUR WEAPON</h3>
				</div>
				<div className="inputUsername-container d-flex justify-content-center">
					<div>
						<h4>{props.players.player1}</h4>
						<input
							name="player1"
							placeholder="Player 1 username"
							onChange={handleChangePlayer}
						/>
					</div>
					<div>
						<h4>{props.players.player2}</h4>
						<input
							name="player2"
							placeholder="Player 2 username"
							onChange={handleChangePlayer}
						/>
					</div>
				</div>
				<div className="selectStart-container d-flex justify-content-center">
					<div>
						<button
							style={{ color: "#e2cf77" }}
							className="btnWeapon m-2"
							onClick={() => {
								if (
									props.players.player1 != "" &&
									props.players.player2 != ""
								) {
									props.handleChangeView("game");
									props.setFirst("X");
								} else {
									alert("Debe llenar todos los campos");
								}
							}}>
							X
						</button>
					</div>
					<div>
						<button
							style={{ color: "#3da4cc" }}
							className="btnWeapon m-2"
							onClick={() => {
								if (
									props.players.player1 != "" &&
									props.players.player2 != ""
								) {
									props.handleChangeView("game");
									props.setFirst("O");
								} else {
									alert("Debe llenar todos los campos");
								}
							}}>
							O
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

PickWeapon.propTypes = {
	handleChangeView: PropTypes.func,
	players: PropTypes.object,
	handleChangePlayers: PropTypes.func,
	setFirst: PropTypes.func
};
