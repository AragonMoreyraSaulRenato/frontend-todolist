import { useContext } from "react";
import { IProyecto } from "../../interfaces";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareaContext";

interface Props {
	proyecto: IProyecto;
}

const Proyecto = ({ proyecto }: Props) => {
	const { proyectoActual } = useContext(proyectoContext);

	const { obtenerTareas } = useContext(tareasContext);

	//AGREGAR EL PROYECTO ACTUAL
	const seleccionarProyecto = (proyectoId: string): void => {
		proyectoActual!(proyectoId);
		obtenerTareas!(proyectoId);
	};

	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => seleccionarProyecto(proyecto._id ? proyecto._id : "")}
			>
				{proyecto.nombre}
			</button>
		</li>
	);
};

export default Proyecto;
