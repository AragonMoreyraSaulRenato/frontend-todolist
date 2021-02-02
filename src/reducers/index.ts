import { combineReducers } from "redux";

import proyectosReducer from "./proyectosReducer";

export default combineReducers({
	proyectos: proyectosReducer,
});
