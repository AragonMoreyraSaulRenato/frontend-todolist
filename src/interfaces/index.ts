export interface IProyecto {
	id?: number;
	nombre?: string;
}

export interface ITarea {
	id?: number;
	nombre?: string;
	estado?: boolean;
	proyectoId?: number;
}

export interface IUsuario {
	nombre?: string;
	email?: string;
	password?: string;
}
