import React, { useReducer, ReactElement } from "react";
import { v4 as uuid } from "uuid";
import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./proyectoReducer";

import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
	ELIMINAR_PROYECTO,
} from "./proyectoTypes";
import { IProyecto } from "../../interfaces";

interface ContextProps {
	children?: ReactElement;
}

const proyectos = [
	{ id: 1, nombre: "Titularme" },
	{ id: 2, nombre: "Aprender Redux" },
	{ id: 3, nombre: "Acabar Rick & Morty APP" },
	{ id: 4, nombre: "Decidir empresa" },
];

const ProyectoState = (props: ContextProps) => {
	const [state, dispatch] = useReducer(ProyectoReducer, {
		formulario: false,
		proyectos: [],
		error: false,
		proyecto: null,
	});

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

	//SELECIONA EL PROYECTO QUE EL USUARIO DIO CLICK
	const proyectoActual = (id: number): void => {
		dispatch({ type: PROYECTO_ACTUAL, payload: id });
	};

	const eliminarProyecto = (id: number): void => {
		dispatch({ type: ELIMINAR_PROYECTO, payload: id });
	};

	return (
		<ProyectoContext.Provider
			value={{
				formulario: state.formulario,
				proyectos: state.proyectos,
				error: state.error,
				proyecto: state.proyecto,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostrarError,
				proyectoActual,
				eliminarProyecto,
			}}
		>
			{props.children}
		</ProyectoContext.Provider>
	);
};

export default ProyectoState;
