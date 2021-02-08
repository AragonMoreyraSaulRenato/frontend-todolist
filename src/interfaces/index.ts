export interface IProyecto {
	id?: number;
	nombre?: string;
}

export interface ITarea {
	id?: number;
	nombre?: string;
	estado?: boolean;
	proyectoId: number;
}
