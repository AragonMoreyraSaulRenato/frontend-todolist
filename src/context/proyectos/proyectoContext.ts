import { createContext } from "react";
import { IAlerta, IProyecto } from "../../interfaces";

export interface IContextProyecto {
	formulario: boolean;
	error: boolean;
	proyectos: Array<IProyecto>;
	proyecto: IProyecto | null;
	mensaje: IAlerta | null;
	mostrarFormulario: () => void;
	obtenerProyectos: () => void;
	agregarProyecto: (proyecto: IProyecto) => Promise<any>;
	mostrarError: () => void;
	proyectoActual: (id: string) => void;
	eliminarProyecto: (id: string) => void;
}

const proyectoContext = createContext<Partial<IContextProyecto>>({});
export default proyectoContext;
