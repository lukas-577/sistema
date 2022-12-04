import { BASE_PATH } from "../utils/contans";
import { useEffect, useState } from "react";
import VehiculosText from "../componets/VehiculosText";
import Navbar1 from "../componets/Navbar1";

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
        <div className="my-5">
            <Navbar1></Navbar1>
            <VehiculosText VehiculosText={img}></VehiculosText>
        </div>
    )
}