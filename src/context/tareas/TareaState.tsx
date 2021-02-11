import { ReactElement, useReducer } from "react";
import clienteAxios from "../../config/axios";
import { ITarea } from "../../interfaces";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	TAREA_ACTUAL,
	ACTUALIZAR_TAREA,
	LIMPIAR_TAREA,
} from "./tareaTypes";

interface ContextProps {
	children?: ReactElement;
}

const TareaState = (props: ContextProps) => {
	const initalState = {
		tareasProyecto: [],
		error: false,
		tareaActual: null,
	};

	const [state, dispatch] = useReducer(TareaReducer, initalState);

	const obtenerTareas = async (proyecto: string) => {
		try {
			const resultado = await clienteAxios.get("/api/tareas", {
				params: { proyecto },
			});
			dispatch({ type: TAREAS_PROYECTO, payload: resultado.data });
		} catch (error) {
			console.log(error);
		}
	};

	const agregarTarea = async (tarea: ITarea) => {
		try {
			const respuesta = await clienteAxios.post("/api/tareas", tarea);
			dispatch({ type: AGREGAR_TAREA, payload: respuesta.data.tarea });
		} catch (error) {
			console.log(error);
		}
	};

	const validarTarea = () => {
		dispatch({ type: VALIDAR_TAREA });
	};

	const eliminarTarea = async (tareaId: string, proyecto: string) => {
		try {
			await clienteAxios.delete(`/api/tareas/${tareaId}`, {
				params: { proyecto },
			});
			dispatch({ type: ELIMINAR_TAREA, payload: tareaId });
		} catch (error) {
			console.log(error);
		}
	};

	const actualizarTarea = async (tarea: ITarea) => {
		try {
			const resultado = await clienteAxios.put(
				`/api/tareas/${tarea._id}`,
				tarea
			);
			dispatch({ type: ACTUALIZAR_TAREA, payload: resultado.data.tarea });
		} catch (error) {
			console.log(error);
		}
	};

	const guardarTareaActual = (tarea: ITarea): void => {
		dispatch({ type: TAREA_ACTUAL, payload: tarea });
	};

	const limpiarTarea = (): void => {
		dispatch({ type: LIMPIAR_TAREA });
	};

	return (
		<TareaContext.Provider
			value={{
				tareasProyecto: state.tareasProyecto,
				error: state.error,
				tareaActual: state.tareaActual,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
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
