import { ITarea } from "../../interfaces";

import tareasContext from "../../context/tareas/tareaContext";
import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
interface TareaProps {
	tarea: ITarea;
}

export default function Tarea({ tarea }: TareaProps) {
	const { proyecto } = useContext(proyectoContext);
	const {
		eliminarTarea,
		obtenerTareas,
		cambiarEstadoTarea,
		guardarTareaActual,
	} = useContext(tareasContext);

	const handleDelete = (tareaId: number) => {
		const idProyecto = proyecto?.id as number;
		eliminarTarea(tareaId);
		obtenerTareas(idProyecto);
	};

	const cambiarEstado = (tarea: ITarea) => {
		if (tarea.estado) tarea.estado = false;
		else tarea.estado = true;
		cambiarEstadoTarea(tarea);
	};

	const seleccionarTarea = (tarea: ITarea) => {
		guardarTareaActual(tarea);
	};

	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>

			<div className="estado">
				{tarea.estado ? (
					<button
						type="button"
						className="completo"
						onClick={() => cambiarEstado(tarea)}
					>
						Completo
					</button>
				) : (
					<button
						type="button"
						className="incompleto"
						onClick={() => cambiarEstado(tarea)}
					>
						Incompleto
					</button>
				)}
			</div>

			<div className="acciones">
				<button
					type="button"
					className="btn btn-primario"
					onClick={() => seleccionarTarea(tarea)}
				>
					Editar
				</button>
				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => handleDelete(tarea.id ? tarea.id : 0)}
				>
					Eliminar
				</button>
			</div>
		</li>
	);
}
