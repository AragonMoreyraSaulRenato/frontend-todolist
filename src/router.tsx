import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import SignIn from "./pages";

export default function MyRoutes(): ReactElement {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route exact path="/" component={SignIn} />
				</Switch>
			</Provider>
		</Router>
	);
}
