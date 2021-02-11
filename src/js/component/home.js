import React, { useState } from "react";
import { Menu } from "./menu/menu.js";
import { Game } from "./game/game.js";

export function Home() {
	const [view, setView] = useState("menu");
	const [players, setPlayers] = useState({
		player1: "",
		player2: ""
	});
	const [first, setFirst] = useState("");

	function handleChangeView(newView) {
		setView(newView);
	}

	function handleChangePlayer(newPlayers) {
		setPlayers({ ...players, ...newPlayers });
	}

	return (
		<div>
			{view == "menu" ? (
				<Menu
					handleChangeView={handleChangeView}
					players={players}
					handleChangePlayers={handleChangePlayer}
					setFirst={setFirst}
				/>
			) : (
				<Game
					handleChangeView={handleChangeView}
					first={first}
					players={players}
					handleChangePlayers={handleChangePlayer}
				/>
			)}
		</div>
	);
}
