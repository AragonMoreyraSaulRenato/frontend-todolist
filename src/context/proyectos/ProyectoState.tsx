import React, { useReducer, ReactElement } from "react";
import { v4 as uuid } from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { initialStateProyecto } from "./initialState";
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
} from "../../types";
import { IProyecto } from "../../interfaces";

interface ProyectoStateProps {
	children?: ReactElement;
}

const proyectos = [
	{ id: 1, nombre: "Titularme" },
	{ id: 2, nombre: "Aprender Redux" },
	{ id: 3, nombre: "Acabar Rick & Morty APP" },
	{ id: 4, nombre: "Decidir empresa" },
];

const ProyectoState = (props: ProyectoStateProps) => {
	const [state, dispatch] = useReducer(proyectoReducer, initialStateProyecto);

	const mostrarFormulario = (): void => {
		dispatch({
			type: FORMULARIO_PROYECTO,
		});
	};

	const obtenerProyectos = (): void => {
		dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
	};

	const agregarProyecto = (proyecto: IProyecto): void => {
		proyecto.id = uuid();
		dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
	};

	const mostrarError = (): void => {
		dispatch({ type: VALIDAR_FORMULARIO });
	};

	return (
		<proyectoContext.Provider
			value={{
				formulario: state.formulario,
				proyectos: state.proyectos,
				error: state.error,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostrarError,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	);
};

export default ProyectoState;
