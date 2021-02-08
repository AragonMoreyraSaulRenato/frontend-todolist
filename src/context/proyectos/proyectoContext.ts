import { createContext } from "react";
import { IProyecto } from "../../interfaces";

interface IContextProyecto {
	formulario: boolean;
	error: boolean;
	proyectos: Array<IProyecto>;
	proyecto: IProyecto | null;
	mostrarFormulario: () => void;
	obtenerProyectos: () => void;
	agregarProyecto: (proyecto: IProyecto) => void;
	mostrarError: () => void;
	proyectoActual: (id: number) => void;
	eliminarProyecto: (id: number) => void;
}

const proyectoContext = createContext<IContextProyecto>({
	formulario: false,
	error: false,
	proyectos: [],
	proyecto: null,
	mostrarFormulario: () => {},
	obtenerProyectos: () => {},
	agregarProyecto: (proyecto: IProyecto) => {},
	mostrarError: () => {},
	proyectoActual: (id: number) => {},
	eliminarProyecto: (id: number) => {},
});
export default proyectoContext;
