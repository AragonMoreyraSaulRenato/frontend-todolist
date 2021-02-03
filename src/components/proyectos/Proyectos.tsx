import { ReactElement } from "react";
import Siderbar from "../layout/Siderbar";

export default function Proyectos(): ReactElement {
	return (
		<div className="contenedor-app">
			<Siderbar />
			<div className="seccion-principal">
				<main>
					<div className="contenedor-tareas"></div>
				</main>
			</div>
		</div>
	);
}
