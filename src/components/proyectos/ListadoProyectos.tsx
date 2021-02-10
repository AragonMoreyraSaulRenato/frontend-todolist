import React, { useContext, ReactElement, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { IProyecto } from "../../interfaces";
import AlertaContext from "../../context/alertas/alertaContext";

export default function ListadoProyectos(): ReactElement | null {
	const { mensaje, proyectos, obtenerProyectos } = useContext(proyectoContext);
	const { alerta, mostrarAlerta } = useContext(AlertaContext);
	useEffect(() => {
		if (mensaje) {
			mostrarAlerta!(mensaje.msg, mensaje.category);
		}
		obtenerProyectos!();
		// eslint-disable-next-line
	}, [mensaje]);

	if (proyectos?.length === 0)
		return <p>No hay proyectos, comienza creando uno</p>;

	return (
		<ul className="listado-proyectos">
			{alerta && (
				<div className={`alerta ${alerta.category}`}>{alerta.msg}</div>
			)}
			<TransitionGroup>
				{proyectos?.map((proyecto: IProyecto) => (
					<CSSTransition
						key={`item-proyecto-${proyecto._id}`}
						timeout={200}
						classNames="proyecto"
					>
						<Proyecto proyecto={proyecto} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
}
