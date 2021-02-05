import { ReactElement, Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { IProyecto } from "../../interfaces";

export default function NuevoProyecto(): ReactElement {
	const {
		formulario,
		error,
		mostrarFormulario,
		agregarProyecto,
		mostrarError,
	} = useContext(proyectoContext);

	const [proyecto, setProyecto] = useState<IProyecto>({
		nombre: "",
	});

	const { nombre } = proyecto;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setProyecto({ ...proyecto, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		//validator
		if (nombre === "") {
			mostrarError();
			return;
		}

		//agregar al states
		agregarProyecto(proyecto);

		//reset form
		setProyecto({ nombre: "" });
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={() => mostrarFormulario()}
			>
				Nuevo Proyecto
			</button>

			{formulario && (
				<form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
					<input
						type="text"
						className="input-text"
						placeholder="Nuevo Proyecto"
						name="nombre"
						autoComplete="off"
						onChange={onChange}
						value={nombre}
					/>

					<input
						type="submit"
						className="btn btn-block btn-primario"
						value="Agregar Proyecto"
					/>
				</form>
			)}

			{error && <p className="mensaje error">El nombre es obligatorio</p>}
		</Fragment>
	);
}
