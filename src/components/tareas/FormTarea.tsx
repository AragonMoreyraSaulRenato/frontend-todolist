export default function FormTarea() {
	return (
		<div className="formulario">
			<form>
				<div className="contenerdor-input">
					<input
						type="text"
						className="input-text"
						name="tarea"
						placeholder="Nombre tarea"
					/>
				</div>
				<div className="contenerdor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value="Agregar Tarea"
					/>
				</div>
			</form>
		</div>
	);
}
