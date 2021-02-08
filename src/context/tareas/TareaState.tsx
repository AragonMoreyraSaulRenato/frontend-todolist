import { ReactElement, useReducer } from "react";
import { ITarea } from "../../interfaces";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
} from "./tareaTypes";

interface ContextProps {
	children?: ReactElement;
}

const TareaState = (props: ContextProps) => {
	const initalState = {
		tareas: [
			{ id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
			{ id: 2, nombre: "Elegir plataforma", estado: false, proyectoId: 2 },
			{ id: 3, nombre: "Elegir plataforma", estado: true, proyectoId: 3 },
			{ id: 4, nombre: "Elegir plataforma", estado: false, proyectoId: 4 },
			{ id: 5, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
			{ id: 6, nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
			{ id: 7, nombre: "Elegir plataforma", estado: false, proyectoId: 3 },
			{ id: 8, nombre: "Elegir plataforma", estado: false, proyectoId: 4 },
		],
		tareasProyecto: null,
		error: false,
	};

	const [state, dispatch] = useReducer(TareaReducer, initalState);

	const obtenerTareas = (proyectoId: number): void => {
		dispatch({ type: TAREAS_PROYECTO, payload: proyectoId });
	};

	const agregarTarea = (tarea: ITarea): void => {
		dispatch({ type: AGREGAR_TAREA, payload: tarea });
	};

	const validarTarea = () => {
		dispatch({ type: VALIDAR_TAREA });
	};

	const eliminarTarea = (tareaId: number): void => {
		dispatch({ type: ELIMINAR_TAREA, payload: tareaId });
	};

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				error: state.error,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
			}}
		>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
