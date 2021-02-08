import { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareaContext";
import { ITarea } from "../../interfaces";

export default function FormTarea() {
	const { proyecto } = useContext(proyectoContext);
	const { error, agregarTarea, validarTarea, obtenerTareas } = useContext(
		tareasContext
	);

	const [tarea, setTarea] = useState({
		nombre: "",
	});
	const { nombre } = tarea;

	//SI NO HAY NINGUN PROYECTO
	if (!proyecto) return null;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTarea({
			...tarea,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		//validar
		if (nombre.trim() === "") {
			validarTarea();
			return;
		}

		//pasar validacion

		//agregar
		const idProyecto = proyecto.id as number;
		const newTarea: ITarea = {
			...tarea,
			proyectoId: idProyecto,
			estado: false,
		};

		agregarTarea(newTarea);

		//obtener y filtrar tareas del proyecto actual
		obtenerTareas(idProyecto);

		//limpiar form
		setTarea({ nombre: "" });
	};

	return (
		<div className="formulario">
			<form onSubmit={onSubmit}>
				<div className="contenerdor-input">
					<input
						type="text"
						className="input-text"
						name="tarea"
						placeholder="Nombre tarea"
						value={nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="contenerdor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value="Agregar Tarea"
					/>
				</div>
			</form>
			{error && <p className="mensaje error">El nombre es obligatorio</p>}
		</div>
	);
}
