import { IProyecto } from "../../interfaces";

export interface IContextProyecto {
	formulario: boolean;
	error: boolean;
	proyectos: Array<IProyecto>;
	mostrarFormulario: () => void;
	obtenerProyectos: () => void;
	agregarProyecto: (proyecto: IProyecto) => void;
	mostrarError: () => void;
}

export const initialContextProyecto: IContextProyecto = {
	formulario: false,
	error: false,
	proyectos: [],
	mostrarFormulario: () => {},
	obtenerProyectos: () => {},
	agregarProyecto: (proyecto: IProyecto) => {},
	mostrarError: () => {},
};
