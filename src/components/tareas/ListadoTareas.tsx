import { Fragment } from "react";
import { ITarea } from "../../interfaces";
import Tarea from "./Tarea";

export default function ListadoTareas() {
	const tareas: Array<ITarea> = [
		{ id: 1, nombre: "Elegir plataforma", estado: true },
		{ id: 2, nombre: "Elegir plataforma", estado: false },
		{ id: 3, nombre: "Elegir plataforma", estado: false },
		{ id: 4, nombre: "Elegir plataforma", estado: false },
	];

	return (
		<Fragment>
			<h2>Proyecto: Tienda Virtual</h2>
			<ul className="listado-tareas">
				{tareas.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareas.map((tarea: ITarea) => (
						<Tarea key={`item-tareas-${tarea.id}`} tarea={tarea} />
					))
				)}
			</ul>

			<button type="button" className="btn btn-primario">
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
}
