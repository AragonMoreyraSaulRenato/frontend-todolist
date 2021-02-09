import { createContext } from "react";

interface IContextAlerta {
	alerta: {
		msg: string;
		category: string;
	} | null;
	mostrarAlerta: (msg: string, category: string) => void;
}
const alertaContext = createContext<IContextAlerta>({
	alerta: null,
	mostrarAlerta: (msg: string, category: string) => {},
});

export default alertaContext;
