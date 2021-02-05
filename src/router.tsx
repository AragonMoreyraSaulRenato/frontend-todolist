import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";

export default function MyRoutes(): ReactElement {
	return (
		<ProyectoState>
			<Router>
				<Switch>
					<Route exact path="/" component={SignIn} />
					<Route exact path="/nueva-cuenta" component={SignUp} />
					<Route exact path="/proyectos" component={Proyectos} />
				</Switch>
			</Router>
		</ProyectoState>
	);
}
