import { createContext } from "react";
import { IContextProyecto, initialContextProyecto } from "./initialContext";

const proyectoContext = createContext<IContextProyecto>(initialContextProyecto);
export default proyectoContext;
