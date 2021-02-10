import { createContext } from "react";
import { ITarea } from "../../interfaces";

interface IContextTarea {
	tareas: Array<ITarea>;
	tareasProyecto: Array<ITarea> | null;
	error: boolean;
	tareaActual: ITarea | null;
	obtenerTareas: (proyectoId: string) => void;
	agregarTarea: (tarea: ITarea) => void;
	validarTarea: () => void;
	eliminarTarea: (tareaId: string) => void;
	cambiarEstadoTarea: (tarea: ITarea) => void;
	guardarTareaActual: (tarea: ITarea) => void;
	actualizarTarea: (tarea: ITarea) => void;
	limpiarTarea: () => void;
}

const TareaContext = createContext<Partial<IContextTarea>>({});

export default TareaContext;
