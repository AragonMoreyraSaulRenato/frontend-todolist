import React, { ReactElement, Fragment } from "react";

export default function NuevoProyecto(): ReactElement {
	return (
		<Fragment>
			<button type="button" className="btn btn-block btn-primario">
				Nuevop Proyecto
			</button>

			<form className="formulario-nuevo-proyecto">
				<input
					type="text"
					className="input-text"
					placeholder="Nuevo Proyecto"
					name="nombre"
					autoComplete="off"
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
