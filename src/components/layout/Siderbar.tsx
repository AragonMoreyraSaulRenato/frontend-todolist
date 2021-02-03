import React, { ReactElement } from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";

export default function Siderbar(): ReactElement {
	return (
		<aside>
			<h1>
				Mern <span>Tasks</span>
			</h1>

			<NuevoProyecto />

			<div className="proyectos">
				<h2>Tus proyectos</h2>
			</div>
		</aside>
	);
}
