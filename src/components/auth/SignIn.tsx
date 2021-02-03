import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn(): ReactElement {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombrea-dark">
				<h1>Iniciar Sesion</h1>

				<form onSubmit={onSubmit}>
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
