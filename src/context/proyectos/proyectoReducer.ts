import { IProyecto } from "../../interfaces";
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
} from "../../types";

interface IAction {}
interface IAction {
	type: string;
	payload?: IProyecto | Array<IProyecto>;
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
		case PROYECTO_ACTUAL:
			const { id } = action.payload as IProyecto;
			return {
				...state,
				proyecto: state.proyectos.filter(
					(proyecto: IProyecto) => proyecto.id === id
				),
			};
		default:
			return state;
	}
};

export default reducer;
