export interface IProyecto {
	_id?: string;
	nombre?: string;
}

export interface ITarea {
	_id?: string;
	nombre?: string;
	estado?: boolean;
	proyectoId?: string;
}

export interface IUsuario {
	nombre?: string;
	email?: string;
	password?: string;
}

export interface IAlerta {
	msg: string;
	category: string;
}
