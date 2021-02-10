import { useContext, useEffect } from "react";
import authContext from "../../context/authentication/authContext";
export default function Barra() {
	const { usuario, usuarioAutenticado, cerrarSesion } = useContext(authContext);

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

	return (
		<header className="app-header">
			{usuario && (
				<p className="nombre-usuario">
					Hola <span>Saul Aragon</span>
				</p>
			)}

			<nav className="nav-principal">
				<button
					className="btn btn-blank cerrar-sesion"
					onClick={() => cerrarSesion()}
				>
					Cerrar Sesion
				</button>
			</nav>
		</header>
	);
}
