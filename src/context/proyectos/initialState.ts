import { IProyecto } from "../../interfaces";

export interface IStateProyecto {
	formulario: boolean;
	proyectos: Array<IProyecto>;
	error: boolean;
}

export const initialStateProyecto: IStateProyecto = {
	formulario: false,
	proyectos: [],
	error: false,
};
