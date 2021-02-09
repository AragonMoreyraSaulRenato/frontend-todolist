import { useReducer, ReactElement } from "react";
import AlertaContext from "./alertaContext";
import alertaReducer from "./alertaReducer";
import { MOSTRAR_ALERTA, OCULAR_ALERTA } from "./typesAlerta";

interface ContextProps {
	children?: ReactElement;
}
const AlertaState = (props: ContextProps) => {
	const initialState = {
		alerta: null,
	};

	const [state, dispatch] = useReducer(alertaReducer, initialState);

	const mostrarAlerta = (msg: string, category: string): void => {
		dispatch({ type: MOSTRAR_ALERTA, payload: { msg, category } });
		setTimeout(() => dispatch({ type: OCULAR_ALERTA }), 3000);
	};

	return (
		<AlertaContext.Provider
			value={{
				alerta: state.alerta,
				mostrarAlerta,
			}}
		>
			{props.children}
		</AlertaContext.Provider>
	);
};

export default AlertaState;
