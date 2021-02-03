import React, { ReactElement } from "react";
import { IProyecto } from "../../interfaces";
import Proyecto from "./Proyecto";

export default function ListadoProyectos(): ReactElement {
	const proyectos: Array<IProyecto> = [
		{ nombre: "Tienda Virtua" },
		{ nombre: "Intranet" },
		{ nombre: "Diseño Sito Web" },
	];

	return (
		<ul className="listado-proyectos">
			{proyectos.map((proyecto) => (
				<Proyecto proyecto={proyecto} />
			))}
		</ul>
	);
}
