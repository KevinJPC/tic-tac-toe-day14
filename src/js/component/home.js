import React, { useState } from "react";
import { Menu } from "./menu/menu.js";
import { Game } from "./game/game.js";

export function Home() {
	const [view, setView] = useState("menu");
	function handleChangeView(newView) {
		setView(newView);
	}
	return (
		<div>
			{view == "menu" ? (
				<Menu handleChangeView={handleChangeView} />
			) : (
				<Game handleChangeView={handleChangeView} />
			)}
		</div>
	);
}
