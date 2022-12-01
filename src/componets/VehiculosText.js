export default function VehiculosText(props) {
    const { VehiculosText } = props;
    console.log(VehiculosText);
    return (
        <div >
            <div className="container my-5">
                <div className='row justify-content-center'>
                    {!VehiculosText ? "cargando..." :
                        VehiculosText.map((todo, i) => {
                            return (

                                <div key={i} className='col-md-4 my-2'>
                                    <h3>modelo: {todo.modelo}</h3>
                                    <h3>marca: {todo.marca}</h3>
                                    <h3>origen: {todo.viaje.origen}</h3>
                                    <h1 >destino: {todo.viaje.destino}</h1>
                                    <h1>El monto que gano segun la app: {todo.gano.gano}</h1>
                                    <h1>Lo que gasto: {todo.viaje.kilometros_recorrido / todo.kilometros_litro * todo.gasto.bencina + parseInt(todo.gasto.tag)}</h1>
                                    <h1 >lo que gano: {todo.gano.gano - (todo.viaje.kilometros_recorrido / todo.kilometros_litro * todo.gasto.bencina + parseInt(todo.gasto.tag))}</h1>
                                    <br></br>
                                </div>


                            );
                        }).reverse()}
                </div>

            </div>
        </div>
    )
}