import { BASE_PATH } from "../utils/contans";
import { useEffect, useState } from "react";
import VehiculosText from "../componets/VehiculosText";

export default function Home() {

    const [img, setImg] = useState();
    const reqApi2 = async () => {
        const api2 = await fetch(`${BASE_PATH}/vehiculos`);
        const response2 = await api2.json();
        setImg(response2);
        //console.log(response2);
    }


    useEffect(() => {
        reqApi2()
    }, []);


    return (
        <div>
            <h1>Estamos en la home</h1>
            <VehiculosText VehiculosText={img}></VehiculosText>
        </div>
    )
}