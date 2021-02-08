import { ReactElement, useReducer } from "react";
import { ITarea } from "../../interfaces";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { v4 as uuid } from "uuid";
import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
	TAREA_ACTUAL,
	ACTUALIZAR_TAREA,
	LIMPIAR_TAREA,
} from "./tareaTypes";

interface ContextProps {
	children?: ReactElement;
}

const TareaState = (props: ContextProps) => {
	const initalState = {
		tareas: [
			{ id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
			{ id: 2, nombre: "Elegir color", estado: false, proyectoId: 2 },
			{ id: 3, nombre: "Elegir ORM", estado: true, proyectoId: 3 },
			{ id: 4, nombre: "Elegir SO", estado: false, proyectoId: 4 },
			{ id: 5, nombre: "Elegir proyect manager", estado: true, proyectoId: 1 },
			{ id: 6, nombre: "Elegir DevOps", estado: true, proyectoId: 2 },
			{ id: 7, nombre: "Elegir CSS Framework", estado: false, proyectoId: 3 },
			{ id: 8, nombre: "Elegir mapeo", estado: false, proyectoId: 4 },
		],
		tareasProyecto: null,
		error: false,
		tareaActual: null,
	};

	const [state, dispatch] = useReducer(TareaReducer, initalState);

	const obtenerTareas = (proyectoId: number): void => {
		dispatch({ type: TAREAS_PROYECTO, payload: proyectoId });
	};

	const agregarTarea = (tarea: ITarea): void => {
		tarea.id = uuid();
		dispatch({ type: AGREGAR_TAREA, payload: tarea });
	};

	const validarTarea = () => {
		dispatch({ type: VALIDAR_TAREA });
	};

	const eliminarTarea = (tareaId: number): void => {
		dispatch({ type: ELIMINAR_TAREA, payload: tareaId });
	};

	const cambiarEstadoTarea = (tarea: ITarea): void => {
		dispatch({ type: ESTADO_TAREA, payload: tarea });
	};

	const guardarTareaActual = (tarea: ITarea): void => {
		dispatch({ type: TAREA_ACTUAL, payload: tarea });
	};

	const actualizarTarea = (tarea: ITarea): void => {
		dispatch({ type: ACTUALIZAR_TAREA, payload: tarea });
	};

	const limpiarTarea = (): void => {
		dispatch({ type: LIMPIAR_TAREA });
	};

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				error: state.error,
				tareaActual: state.tareaActual,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
				cambiarEstadoTarea,
				guardarTareaActual,
				actualizarTarea,
				limpiarTarea,
			}}
		>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
