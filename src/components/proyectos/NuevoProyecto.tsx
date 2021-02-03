import React, { ReactElement, Fragment, useState } from "react";

export default function NuevoProyecto(): ReactElement {
	const [proyecto, setProyecto] = useState({
		nombre: "",
	});

	const { nombre } = proyecto;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setProyecto({ ...proyecto, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		//validator

		//agregar al states

		//reset form
	};

	return (
		<Fragment>
			<button type="button" className="btn btn-block btn-primario">
				Nuevop Proyecto
			</button>

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
		</Fragment>
	);
}
