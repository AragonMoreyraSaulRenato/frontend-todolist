import { Fragment, useContext } from "react";
import { ITarea } from "../../interfaces";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareaContext";

export default function ListadoTareas() {
	const { proyecto, eliminarProyecto } = useContext(proyectoContext);
	const { tareasProyecto } = useContext(tareasContext);

	//SI NO HAY NINGUN PROYECTO
	if (!proyecto) return <h2>Selecciona un proyecto</h2>;

	return (
		<Fragment>
			<h2>Proyecto: {proyecto.nombre}</h2>
			<ul className="listado-tareas">
				{!tareasProyecto ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasProyecto.map((tarea: ITarea) => (
						<Tarea key={`item-tareas-${tarea.id}`} tarea={tarea} />
					))
				)}
			</ul>

			<button
				type="button"
				className="btn btn-primario"
				onClick={() => eliminarProyecto(proyecto.id ? proyecto.id : 0)}
			>
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
}
