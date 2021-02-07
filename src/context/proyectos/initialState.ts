import { IProyecto } from "../../interfaces";

export interface IStateProyecto {
	formulario: boolean;
	proyectos: Array<IProyecto>;
	error: boolean;
	proyecto: IProyecto | null;
}

export const initialStateProyecto: IStateProyecto = {
	formulario: false,
	proyectos: [],
	error: false,
	proyecto: null,
};
