import { IProyecto } from "../../interfaces";
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
} from "../../types";

interface IAction {
	type: string;
	payload?: Array<IProyecto> | IProyecto;
}

const reducer = (state, action: IAction) => {
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
		default:
			return state;
	}
};

export default reducer;
