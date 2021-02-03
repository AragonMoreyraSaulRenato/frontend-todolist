import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Proyectos from "./components/proyectos/Proyectos";

export default function MyRoutes(): ReactElement {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route exact path="/nueva-cuenta" component={SignUp} />
				<Route exact path="/proyectos" component={Proyectos} />
			</Switch>
		</Router>
	);
}
