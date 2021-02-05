import { ReactElement } from "react";
import Siderbar from "../layout/Siderbar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

export default function Proyectos(): ReactElement {
	return (
		<div className="contenedor-app">
			<Siderbar />
			<div className="seccion-principal">
				<Barra />

				<main>
					<FormTarea />
					<div className="contenedor-tareas">
						<ListadoTareas />
					</div>
				</main>
			</div>
		</div>
	);
}
