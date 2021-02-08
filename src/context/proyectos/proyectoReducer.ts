import { IProyecto } from "../../interfaces";
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
	ELIMINAR_PROYECTO,
} from "../../types";

interface IActionProyecto {
	type: string;
	payload?: IProyecto | Array<IProyecto> | number;
}

const reducer = (state, action: IActionProyecto) => {
	switch (action.type) {
		case FORMULARIO_PROYECTO:
			return { ...state, formulario: true };
		case OBTENER_PROYECTOS:
			return { ...state, proyectos: action.payload };
		case AGREGAR_PROYECTO:
			return {
				...state,
				proyectos: [...state.proyectos, action.payload],
				formulario: false,
				error: false,
			};
		case VALIDAR_FORMULARIO:
			return { ...state, error: true };
		case PROYECTO_ACTUAL:
			const idActual = action.payload as number;
			return {
				...state,
				proyecto: state.proyectos.filter(
					(proyecto: IProyecto) => proyecto.id === idActual
				)[0],
			};
		case ELIMINAR_PROYECTO:
			const idEliminar = action.payload as number;
			return {
				...state,
				proyectos: state.proyectos.filter(
					(proyecto: IProyecto) => proyecto.id !== idEliminar
				),
				proyecto: null,
			};
		default:
			return state;
	}
};

export default reducer;
