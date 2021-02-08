import { ITarea } from "../../interfaces";

import tareasContext from "../../context/tareas/tareaContext";
import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
interface TareaProps {
	tarea: ITarea;
}

export default function Tarea({ tarea }: TareaProps) {
	const { proyecto } = useContext(proyectoContext);
	const { eliminarTarea, obtenerTareas } = useContext(tareasContext);

	const handleDelete = (tareaId: number) => {
		const idProyecto = proyecto?.id as number;
		eliminarTarea(tareaId);
		obtenerTareas(idProyecto);
	};

	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>

			<div className="estado">
				{tarea.estado ? (
					<button type="button" className="completo">
						Completo
					</button>
				) : (
					<button type="button" className="incompleto">
						Incompleto
					</button>
				)}
			</div>

			<div className="acciones">
				<button type="button" className="btn btn-primario">
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
