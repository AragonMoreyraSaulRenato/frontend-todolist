import {
	AGREGAR_PROYECTO,
	AGREGAR_PROYECTO_EXITO,
	AGREGAR_PROYECTO_ERROR,
} from "../types";

const initialState = {
	proyectos: [],
	error: null,
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
