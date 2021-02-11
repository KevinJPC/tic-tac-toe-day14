import React, { useState } from "react";
import PropTypes from "prop-types";
import { TitleApp } from "../titleApp";
import { Btn } from "./btn";

export function Game(props) {
	const [turn, setTurn] = useState(props.first);
	const [weaponMatrix, setWeaponMatrix] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);
	const [weaponStyleMatrix, setWeaponStyleMatrix] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);
	const [finished, setFinished] = useState(false);
	const [winnerMessage, setWinnerMessage] = useState("");

	function renderTurn(newWeaponMatrix) {
		setWeaponMatrix(newWeaponMatrix);
		if (!checkMatrix()) {
			turn == "X" ? setTurn("O") : setTurn("X");
		}
	}

	function checkMatrix() {
		if (
			checkMatrixHorizontally() ||
			checkMatrixVertically() ||
			checkMatrixDiagonally()
		) {
			setFinished(true);
			let winner = "";
			turn == "X"
				? (winner = props.players.player1)
				: (winner = props.players.player2);
			setWinnerMessage(turn + " Wins! Congratulations " + winner + "!");
			return true;
		} else if (checkMatrixFill()) {
			setFinished(true);
			setWinnerMessage("Nobody Wins!");
			return true;
		}
		return false;
	}

	function checkMatrixHorizontally() {
		for (let i = 0; i < weaponMatrix.length; i++) {
			let styleMatrix = [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			];
			let countMatches = 0;
			let pivotLetter = weaponMatrix[i][0];
			for (let j = 0; j < weaponMatrix[i].length; j++) {
				if (pivotLetter == weaponMatrix[i][j] && pivotLetter != null) {
					countMatches++;
					styleMatrix[i][j] = "winner" + pivotLetter;
				}
				if (countMatches == 3) {
					setWeaponStyleMatrix(styleMatrix);
					return true;
				}
			}
		}
		return false;
	}

	function checkMatrixVertically() {
		for (let j = 0; j < weaponMatrix.length; j++) {
			let styleMatrix = [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			];
			let countMatches = 0;
			let pivotLetter = weaponMatrix[0][j];
			for (let i = 0; i < weaponMatrix[0].length; i++) {
				if (pivotLetter == weaponMatrix[i][j] && pivotLetter != null) {
					countMatches++;
					styleMatrix[i][j] = "winner" + pivotLetter;
				}
				if (countMatches == 3) {
					setWeaponStyleMatrix(styleMatrix);
					return true;
				}
			}
		}
		return false;
	}

	function checkMatrixDiagonally() {
		let styleMatrix = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
		let countMatches = 0;
		let firstPivotLetter = weaponMatrix[0][0];
		let lastPivotLetter = weaponMatrix[0][2];
		for (let i = 0; i < 3; i++) {
			if (
				firstPivotLetter == weaponMatrix[i][i] &&
				firstPivotLetter != null
			) {
				countMatches++;
				styleMatrix[i][i] = "winner" + firstPivotLetter;
			}
			if (countMatches == 3) {
				setWeaponStyleMatrix(styleMatrix);
				return true;
			}
		}
		styleMatrix = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
		countMatches = 0;
		for (let j = 2; j >= 0; j--) {
			if (
				lastPivotLetter == weaponMatrix[2 - j][j] &&
				lastPivotLetter != null
			) {
				countMatches++;
				styleMatrix[2 - j][j] = "winner" + lastPivotLetter;
			}
			if (countMatches == 3) {
				setWeaponStyleMatrix(styleMatrix);
				return true;
			}
		}
		return false;
	}

	function checkMatrixFill() {
		for (let i = 0; i < weaponMatrix.length; i++) {
			for (let j = 0; j < weaponMatrix[i].length; j++) {
				if (weaponMatrix[i][j] == null) {
					return false;
				}
			}
		}
		return true;
	}

	return (
		<div className="gameView-container">
			<TitleApp />
			<div className="top-container">
				<div className="text-center">
					<h3>{!finished ? "It is " + turn + " turn!" : null}</h3>
					<h3 className="win-message">
						{finished ? winnerMessage : null}
					</h3>
				</div>
				<div className="d-flex justify-content-center">
					<button
						className="rounded px-3"
						onClick={() => {
							props.handleChangeView("menu");
							let newPlayers = {
								player1: "",
								player2: ""
							};
							props.handleChangePlayers(newPlayers);
						}}>
						Start Over
					</button>
				</div>
			</div>
			<div className="ticTacToe-container container-fluid d-flex justify-content-center p-0 mt-3">
				<div className="ticTacToe row justify-content-center col-sm-12 col-md-8 col-lg-8">
					<div className="col-12 d-flex flex-row">
						<Btn
							borderStyle="border-right"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[0][0]}
							weaponStyle={weaponStyleMatrix[0][0]}
							positionI={0}
							positionJ={0}
							finished={finished}
						/>
						<Btn
							borderStyle=""
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[0][1]}
							weaponStyle={weaponStyleMatrix[0][1]}
							positionI={0}
							positionJ={1}
							finished={finished}
						/>
						<Btn
							borderStyle="border-left"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[0][2]}
							weaponStyle={weaponStyleMatrix[0][2]}
							positionI={0}
							positionJ={2}
							finished={finished}
						/>
					</div>
					<div className="col-12 d-flex flex-row">
						<Btn
							borderStyle="border-top border-bottom border-right"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[1][0]}
							weaponStyle={weaponStyleMatrix[1][0]}
							positionI={1}
							positionJ={0}
							finished={finished}
						/>
						<Btn
							borderStyle="border-top border-bottom"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[1][1]}
							weaponStyle={weaponStyleMatrix[1][1]}
							positionI={1}
							positionJ={1}
							finished={finished}
						/>
						<Btn
							borderStyle="border-left border-bottom border-top"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[1][2]}
							weaponStyle={weaponStyleMatrix[1][2]}
							positionI={1}
							positionJ={2}
							finished={finished}
						/>
					</div>
					<div className="col-12 d-flex flex-row">
						<Btn
							borderStyle="border-right"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[2][0]}
							weaponStyle={weaponStyleMatrix[2][0]}
							positionI={2}
							positionJ={0}
							finished={finished}
						/>
						<Btn
							borderStyle=""
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[2][1]}
							weaponStyle={weaponStyleMatrix[2][1]}
							positionI={2}
							positionJ={1}
							finished={finished}
						/>
						<Btn
							borderStyle="border-left"
							weaponMatrix={weaponMatrix}
							renderTurn={renderTurn}
							turn={turn}
							letter={weaponMatrix[2][2]}
							weaponStyle={weaponStyleMatrix[2][2]}
							positionI={2}
							positionJ={2}
							finished={finished}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Game.propTypes = {
	handleChangeView: PropTypes.func,
	handleChangePlayers: PropTypes.func,
	first: PropTypes.string,
	players: PropTypes.object
};
