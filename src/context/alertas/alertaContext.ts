import { createContext } from "react";
import { IAlerta } from "../../interfaces";

interface IContextAlerta {
	alerta: IAlerta | null;
	mostrarAlerta: (msg: string, category: string) => void;
}
const alertaContext = createContext<Partial<IContextAlerta>>({});

export default alertaContext;
