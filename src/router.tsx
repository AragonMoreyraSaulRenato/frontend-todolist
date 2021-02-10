import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";
import AlertaState from "./context/alertas/AlertaState";
import AuthState from "./context/authentication/AuthState";
import tokenAuth from "./config/tokenAuth";
import RutaPrivada from "./components/routes/RutaPrivada";
import RutaPublica from "./components/routes/RutaPublica";

const token = localStorage.getItem("token");
if (token) {
	tokenAuth(token);
}

export default function MyRoutes(): ReactElement {
	return (
		<ProyectoState>
			<TareaState>
				<AlertaState>
					<AuthState>
						<Router>
							<Switch>
								<RutaPublica
									exact
									path="/"
									component={SignIn}
									restricted={true}
								/>
								<RutaPublica
									exact
									path="/nueva-cuenta"
									component={SignUp}
									restricted={true}
								/>
								<RutaPrivada exact path="/proyectos" component={Proyectos} />
							</Switch>
						</Router>
					</AuthState>
				</AlertaState>
			</TareaState>
		</ProyectoState>
	);
}
