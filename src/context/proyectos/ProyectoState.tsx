import React, { useReducer, ReactElement } from "react";
import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./proyectoReducer";

import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
	ELIMINAR_PROYECTO,
	PROYECTO_ERROR,
} from "./proyectoTypes";
import { IProyecto } from "../../interfaces";
import clienteAxios from "../../config/axios";

interface ContextProps {
	children?: ReactElement;
}

const ProyectoState = (props: ContextProps) => {
	const [state, dispatch] = useReducer(ProyectoReducer, {
		formulario: false,
		proyectos: [],
		error: false,
		proyecto: null,
		mensaje: null,
	});

	const showError = () => {
		const alerta = {
			msg: "Hubio un error",
			category: "alerta-error",
		};
		dispatch({ type: PROYECTO_ERROR, payload: alerta });
	};

	const mostrarFormulario = (): void => {
		dispatch({
			type: FORMULARIO_PROYECTO,
		});
	};

	const obtenerProyectos = async () => {
		try {
			const { data } = await clienteAxios.get("/api/proyectos");
			const proyectos = data as Array<IProyecto>;
			dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
		} catch (error) {
			showError();
		}
	};

	const agregarProyecto = async (proyecto: IProyecto) => {
		try {
			const resultado = await clienteAxios.post("/api/proyectos", proyecto);
			dispatch({ type: AGREGAR_PROYECTO, payload: resultado.data.proyecto });
		} catch (error) {
			showError();
		}
	};

	const mostrarError = (): void => {
		dispatch({ type: VALIDAR_FORMULARIO });
	};

	//SELECIONA EL PROYECTO QUE EL USUARIO DIO CLICK
	const proyectoActual = (id: string): void => {
		dispatch({ type: PROYECTO_ACTUAL, payload: id });
	};

	const eliminarProyecto = async (id: string) => {
		try {
			await clienteAxios.delete(`/api/proyectos/${id}`);
			dispatch({ type: ELIMINAR_PROYECTO, payload: id });
		} catch (error) {
			showError();
		}
	};

	return (
		<ProyectoContext.Provider
			value={{
				formulario: state.formulario,
				proyectos: state.proyectos,
				error: state.error,
				proyecto: state.proyecto,
				mensaje: state.mensaje,
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
