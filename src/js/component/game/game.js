import React from "react";
import PropTypes from "prop-types";
import { TitleApp } from "../titleApp";
import { Btn } from "./btn";

export function Game(props) {
	return (
		<div className="gameView-container">
			<TitleApp />
			<div className="top-container">
				<div className="text-center">
					<h3>It is X turn!</h3>
					<h3 className="win-message">x Wins!</h3>
				</div>
				<div className="d-flex justify-content-center">
					<button
						className="rounded px-3"
						onClick={() => props.handleChangeView("menu")}>
						Start Over
					</button>
				</div>
			</div>
			<div className="ticTacToe-container container-fluid d-flex justify-content-center p-0 mt-3">
				<div className="ticTacToe row justify-content-center col-sm-12 col-md-8 col-lg-8">
					<div className="col-12 d-flex flex-row">
						<Btn borderStyle="border-right" />
						<Btn borderStyle="" />
						<Btn borderStyle="border-left" />
					</div>
					<div className="col-12 d-flex flex-row">
						<Btn borderStyle="border-top border-bottom border-right" />
						<Btn borderStyle="border-top border-bottom" />
						<Btn borderStyle="border-left border-bottom border-top" />
					</div>
					<div className="col-12 d-flex flex-row">
						<Btn borderStyle="border-right" />
						<Btn borderStyle="" />
						<Btn borderStyle="border-left" />
					</div>
				</div>
			</div>
		</div>
	);
}

Game.propTypes = {
	handleChangeView: PropTypes.func
};
