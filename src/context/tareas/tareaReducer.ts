import { ITarea } from "../../interfaces";
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

interface IActionTarea {
	type: string;
	payload?: ITarea | Array<ITarea> | string;
}

const reducer = (state, action: IActionTarea) => {
	switch (action.type) {
		case TAREAS_PROYECTO:
			return {
				...state,
				tareasProyecto: state.tareas.filter(
					(tarea: ITarea) => tarea.proyectoId === action.payload
				),
			};
		case AGREGAR_TAREA:
			return {
				...state,
				tareas: [action.payload, ...state.tareas],
				error: false,
			};
		case VALIDAR_TAREA:
			return { ...state, error: true };
		case ELIMINAR_TAREA:
			return {
				...state,
				tareas: state.tareas.filter(
					(tarea: ITarea) => tarea._id !== action.payload
				),
			};
		case ESTADO_TAREA:
		case ACTUALIZAR_TAREA:
			const tareaPayload = action.payload as ITarea;
			return {
				...state,
				tareas: state.tareas.map((tarea: ITarea) =>
					tarea._id === tareaPayload._id ? tareaPayload : tarea
				),
			};
		case TAREA_ACTUAL:
			return { ...state, tareaActual: action.payload };
		case LIMPIAR_TAREA:
			return { ...state, tareaActual: null };
		default:
			return state;
	}
};

export default reducer;
