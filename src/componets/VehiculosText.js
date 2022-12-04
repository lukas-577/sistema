export default function VehiculosText(props) {
    const { VehiculosText } = props;
    console.log(VehiculosText);
    return (
        <div >
            <div className="container my-5">
                <div className='row text-start d-flex justify-content-around'>
                    {!VehiculosText ? "cargando..." :
                        VehiculosText.map((todo, i) => {
                            return (

                                <div key={i} className='col-md-6 my-5 bg-dark text-white rounded-4 border border-5 p-4'>
                                    <h3>modelo: {todo.modelo}</h3>
                                    <h3>marca: {todo.marca}</h3>
                                    <h3>origen: {todo.viaje.origen}</h3>
                                    <h3 >destino: {todo.viaje.destino}</h3>
                                    <h3>El monto que gano segun la app: {todo.ganancia.ganancia}</h3>
                                    <h3>Lo que gasto: {todo.viaje.kilometros_recorrido / todo.kilometros_litro * todo.gasto.bencina + parseInt(todo.gasto.tag)}</h3>
                                    <h3 >lo que gano: {todo.ganancia.ganancia - (todo.viaje.kilometros_recorrido / todo.kilometros_litro * todo.gasto.bencina + parseInt(todo.gasto.tag))}</h3>
                                    <br></br>
                                </div>


                            );
                        }).reverse()}
                </div>

            </div>
        </div>
    )
}