import { ReactElement, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

export default function RutaPrivada({
	component: Component,
	...props
}): ReactElement {
	const { autenticado, cargando, usuarioAutenticado } = useContext(AuthContext);

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

	return (
		<Route
			{...props}
			render={() =>
				!autenticado && !cargando ? (
					<Redirect to="/" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
}
