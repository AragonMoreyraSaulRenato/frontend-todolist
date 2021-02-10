import { ReactElement, useContext, useEffect } from "react";
import Siderbar from "../layout/Siderbar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
import authContext from "../../context/authentication/authContext";

export default function Proyectos(): ReactElement {
	const { usuarioAutenticado } = useContext(authContext);

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

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
