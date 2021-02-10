import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

export default function PublicRoute({
	component: Component,
	restricted,
	...rest
}) {
	const { autenticado, usuarioAutenticado } = useContext(AuthContext);

	useEffect(() => {
		usuarioAutenticado();
		// eslint-disable-next-line
	}, []);

	return (
		<Route
			{...rest}
			render={() =>
				autenticado && restricted ? (
					<Redirect to="/proyectos" />
				) : (
					<Component {...rest} />
				)
			}
		/>
	);
}
