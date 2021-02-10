import { ReactElement, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/authentication/authContext";

export default function SignIn(props): ReactElement {
	const { alerta, mostrarAlerta } = useContext(AlertaContext);
	const { mensaje, autenticado, iniciarSesion } = useContext(AuthContext);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	useEffect(() => {
		if (autenticado) props.history.push("/proyectos");

		if (mensaje) mostrarAlerta(mensaje.msg, "alerta-error");

		// eslint-disable-next-line
	}, [mensaje, autenticado, props.history]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (email.trim() === "" || password.trim() === "") {
			mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
			return;
		}

		iniciarSesion({ email, password });
	};

	return (
		<div className="form-usuario">
			{alerta && (
				<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>
			)}
			<div className="contenedor-form sombrea-dark">
				<h1>Iniciar Sesion</h1>

				<form onSubmit={onSubmit} autoComplete="off">
					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							value={email}
							type="email"
							id="email"
							name="email"
							placeholder="ejemplo@ejemplo.com"
							onChange={onChange}
						/>
					</div>
					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							value={password}
							type="password"
							id="password"
							name="password"
							placeholder="*******"
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Inciar Sesion"
						/>
					</div>
				</form>

				<Link to="/nueva-cuenta" className="enlace-cuenta">
					Obtener Cuenta
				</Link>
			</div>
		</div>
	);
}
