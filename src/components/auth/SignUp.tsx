import { ReactElement, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/authentication/authContext";

export default function SignUp(props): ReactElement {
	const { alerta, mostrarAlerta } = useContext(AlertaContext);
	const { mensaje, autenticado, registrarUsuario } = useContext(AuthContext);

	useEffect(() => {
		if (autenticado) props.history.push("/proyectos");

		if (mensaje) mostrarAlerta!(mensaje.msg, "alerta-error");

		// eslint-disable-next-line
	}, [mensaje, autenticado, props.history]);

	const [user, setUser] = useState({
		nombre: "",
		email: "",
		password: "",
		confirmar: "",
	});

	const { nombre, email, password, confirmar } = user;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		//no campos vacios
		if (
			nombre.trim() === "" ||
			email.trim() === "" ||
			password.trim() === "" ||
			confirmar.trim() === ""
		) {
			mostrarAlerta!("Todos los campos son obligatorios", "alerta-error");
			return;
		}

		//password minimo 6 caracteres
		if (password.length < 6) {
			mostrarAlerta!(
				"La contraseña debe ser de al menos 6 caracteres",
				"alerta-error"
			);
			return;
		}

		//dos password iguales
		if (password !== confirmar) {
			mostrarAlerta!("Las contraseñas no coinciden", "alerta-error");
			return;
		}

		//pasarlo al action
		registrarUsuario({
			nombre,
			email,
			password,
		});
	};

	return (
		<div className="form-usuario">
			{alerta && (
				<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>
			)}
			<div className="contenedor-form sombrea-dark">
				<h1>Obtener una cuenta</h1>

				<form onSubmit={onSubmit} autoComplete="off">
					<div className="campo-form">
						<label htmlFor="nombre">Nombre</label>
						<input
							value={nombre}
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Saul Moreyra..."
							onChange={onChange}
						/>
					</div>

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
						<label htmlFor="password">Confirma Password</label>
						<input
							value={confirmar}
							type="password"
							id="confirmar"
							name="confirmar"
							placeholder="*******"
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Registrarme"
						/>
					</div>
				</form>

				<Link to="/" className="enlace-cuenta">
					Iniciar Sesion
				</Link>
			</div>
		</div>
	);
}
