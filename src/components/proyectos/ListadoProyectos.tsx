import React, { useContext, ReactElement, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

export default function ListadoProyectos(): ReactElement | null {
	const { proyectos, obtenerProyectos } = useContext(proyectoContext);

	useEffect(() => {
		obtenerProyectos();

		// eslint-disable-next-line
	}, []);

	if (proyectos.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{proyectos.map((proyecto) => (
				<Proyecto key={`item-proyecto-${proyecto.id}`} proyecto={proyecto} />
			))}
		</ul>
	);
}
