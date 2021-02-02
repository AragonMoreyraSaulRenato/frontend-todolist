import React, { ReactElement } from "react";

//REDUX
import MyRoutes from "./router";

function App(): ReactElement {
	return (
		<div className="App">
			<MyRoutes />
		</div>
	);
}

export default App;
