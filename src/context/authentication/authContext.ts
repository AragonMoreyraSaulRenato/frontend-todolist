import { createContext } from "react";
import { IUsuario } from "../../interfaces";

interface IContextAuth {
	token: string | null;
	autenticado: string | null;
	usuario: string | null;
	mensaje: {
		msg: string;
		category: string;
	} | null;
	registrarUsuario: (usuario: IUsuario) => void;
	iniciarSesion: (usuario: IUsuario) => void;
	usuarioAutenticado: () => void;
	cerrarSesion: () => void;
}
const alertaContext = createContext<IContextAuth>({
	token: null,
	autenticado: null,
	usuario: null,
	mensaje: null,
	registrarUsuario: () => {},
	iniciarSesion: () => {},
	usuarioAutenticado: () => {},
	cerrarSesion: () => {},
});

export default alertaContext;
