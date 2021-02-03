import React from "react";
import { IProyecto } from "../../interfaces";

interface Props {
	proyecto: IProyecto;
}

const Proyecto = ({ proyecto }: Props) => {
	return (
		<li>
			<button type="button" className="btn btn-blank">
				{proyecto.nombre}
			</button>
		</li>
	);
};

export default Proyecto;
