import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(): ReactElement {
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

		//password minimo 6 caracteres

		//dos password iguales

		//pasarlo al action
	};

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombrea-dark">
				<h1>Obtener una cuenta</h1>

				<form onSubmit={onSubmit}>
					<div className="campo-form">
						<label htmlFor="nombre">Email</label>
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
						<label htmlFor="password">Password</label>
						<input
							value={confirmar}
							type="password"
							id="confirma"
							name="confirma"
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
