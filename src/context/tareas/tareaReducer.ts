import { ITarea } from "../../interfaces";
import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
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
				tareasProyecto: action.payload,
			};
		case AGREGAR_TAREA:
			return {
				...state,
				tareasProyecto: [action.payload, ...state.tareasProyecto],
				error: false,
			};
		case VALIDAR_TAREA:
			return { ...state, error: true };
		case ELIMINAR_TAREA:
			return {
				...state,
				tareasProyecto: state.tareasProyecto.filter(
					(tarea: ITarea) => tarea._id !== action.payload
				),
			};
		case ACTUALIZAR_TAREA:
			const tareaPayload = action.payload as ITarea;
			return {
				...state,
				tareasProyecto: state.tareasProyecto.map((tarea: ITarea) =>
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
