import { IProyecto } from "../../interfaces";

export interface IContextProyecto {
	formulario: boolean;
	error: boolean;
	proyectos: Array<IProyecto>;
	proyecto: IProyecto | null;
	mostrarFormulario: () => void;
	obtenerProyectos: () => void;
	agregarProyecto: (proyecto: IProyecto) => void;
	mostrarError: () => void;
	proyectoActual: (proyecto: IProyecto) => void;
}

export const initialContextProyecto: IContextProyecto = {
	formulario: false,
	error: false,
	proyectos: [],
	proyecto: null,
	mostrarFormulario: () => {},
	obtenerProyectos: () => {},
	agregarProyecto: (proyecto: IProyecto) => {},
	mostrarError: () => {},
	proyectoActual: (proyecto: IProyecto) => {},
};
