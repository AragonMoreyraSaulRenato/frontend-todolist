import { ITarea } from "../../interfaces";

interface TareaProps {
	tarea: ITarea;
}

export default function Tarea({ tarea }: TareaProps) {
	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>

			<div className="estado">
				{tarea.estado ? (
					<button type="button" className="completo">
						Completo
					</button>
				) : (
					<button type="button" className="incompleto">
						Incompleto
					</button>
				)}
			</div>

			<div className="acciones">
				<button type="button" className="btn btn-primario">
					Editar
				</button>
				<button type="button" className="btn btn-secundario">
					Eliminar
				</button>
			</div>
		</li>
	);
}
