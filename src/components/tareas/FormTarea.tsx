import { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareaContext";
import { ITarea } from "../../interfaces";

export default function FormTarea() {
	const { proyecto } = useContext(proyectoContext);
	const {
		error,
		tareaActual,
		agregarTarea,
		validarTarea,
		obtenerTareas,
		actualizarTarea,
		limpiarTarea,
	} = useContext(tareasContext);

	const [tarea, setTarea] = useState<ITarea>({
		nombre: "",
	});

	//DETECTA SI HAY UNA TAREA SELECCIONADA
	useEffect(() => {
		if (tareaActual) {
			setTarea(tareaActual);
		}
	}, [tareaActual]);

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
		if (tarea.nombre?.trim() === "") {
			validarTarea!();
			return;
		}

		const idProyecto = proyecto._id as string;
		if (!tareaActual) {
			const newTarea: ITarea = {
				...tarea,
				proyecto: idProyecto,
			};
			agregarTarea!(newTarea);
		} else {
			actualizarTarea!({ ...tareaActual, ...tarea });
			limpiarTarea!();
		}

		//obtener y filtrar tareas del proyecto actual
		obtenerTareas!(idProyecto);

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
						name="nombre"
						placeholder="Nombre tarea"
						value={tarea.nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="contenerdor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value={tareaActual ? "Editar Tarea" : "Agregar Tarea"}
					/>
				</div>
			</form>
			{error && <p className="mensaje error">El nombre es obligatorio</p>}
		</div>
	);
}
