import { createContext } from "react";
import { ITarea } from "../../interfaces";

interface IContextTarea {
	tareas: Array<ITarea>;
	tareasProyecto: Array<ITarea> | null;
	error: boolean;
	obtenerTareas: (proyectoId: number) => void;
	agregarTarea: (tarea: ITarea) => void;
	validarTarea: () => void;
	eliminarTarea: (tareaId: number) => void;
	cambiarEstadoTarea: (tarea: ITarea) => void;
	guardarTareaActual: (tarea: ITarea) => void;
}

const TareaContext = createContext<IContextTarea>({
	tareas: [],
	tareasProyecto: null,
	error: false,
	obtenerTareas: (proyectoId: number): void => {},
	agregarTarea: (tarea: ITarea): void => {},
	validarTarea: () => {},
	eliminarTarea: (tareaId: number) => {},
	cambiarEstadoTarea: (tarea: ITarea) => {},
	guardarTareaActual: (tarea: ITarea) => {},
});

export default TareaContext;
