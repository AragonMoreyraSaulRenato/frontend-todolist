import { ReactElement, useReducer } from "react";

import {
	REGISTRO_EXITOSO,
	REGISTRO_ERROR,
	OBTENER_USUARIO,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	CERRAR_SESION,
} from "./typesAuth";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { IUsuario } from "../../interfaces";

interface ContextProps {
	children?: ReactElement;
}

const AuthState = ({ children }: ContextProps) => {
	const initialState = {
		token: localStorage.getItem("token"),
		autenticado: null,
		usuario: null,
		mensaje: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const registrarUsuario = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("/api/usuarios", datos);
			console.log(respuesta);
			dispatch({ type: REGISTRO_EXITOSO, payload: respuesta.data });
			usuarioAutenticado();
		} catch (error) {
			console.log(error);
			const alerta = {
				msg: error.response.data.msg,
				category: "alerta-error",
			};
			dispatch({ type: REGISTRO_ERROR, payload: alerta });
		}
	};

	const usuarioAutenticado = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			//Funcion para enviar token por header
			tokenAuth(token);
		}

		try {
			const respuesta = await clienteAxios.get("/api/auth");
			dispatch({ type: OBTENER_USUARIO, payload: respuesta.data.usuario });
		} catch (error) {
			dispatch({ type: LOGIN_ERROR });
		}
	};

	const iniciarSesion = async (datos: IUsuario) => {
		try {
			const respuesta = await clienteAxios.post("/api/auth", datos);
			dispatch({ type: LOGIN_EXITOSO, payload: respuesta.data });
			usuarioAutenticado();
		} catch (error) {
			console.log(error.response.data.msg);
			const alerta = {
				msg: error.response.data.msg,
				category: "alerta-error",
			};
			dispatch({ type: LOGIN_ERROR, payload: alerta });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				registrarUsuario,
				iniciarSesion,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
