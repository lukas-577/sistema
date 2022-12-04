import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-strapi-rest';
import authProvider from './authProvider'
import Cookies from './helpers/Cookies';
import { BASE_PATH } from "../utils/contans";
import Boton from "../componets/Boton";
import { theme } from "../componets/theme";

import { VehiculoList, VehiculoEdit, VehiculoCreate } from "./vehiculo";
import { ViajeList, ViajeEdit, ViajeCreate } from "./viaje";
import { GastoList, GastoEdit, GastoCreate } from "./gasto";
import { GananciaList, GananciaEdit, GananciaCreate } from "./ganoApp";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = Cookies.getCookie('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}



const dataProvider = simpleRestProvider(BASE_PATH, httpClient);

export default function Login() {
    return (
        <div>
            <Boton></Boton>
            <Admin title="Example Admin"
                theme={theme} // Add your theme to react-admin
                authProvider={authProvider} dataProvider={dataProvider}>
                <Resource name="vehiculos" list={VehiculoList} edit={VehiculoEdit} create={VehiculoCreate} />
                <Resource name="viajes" list={ViajeList} edit={ViajeEdit} create={ViajeCreate} />
                <Resource name="gastos" list={GastoList} edit={GastoEdit} create={GastoCreate} />
                <Resource name="ganancias" list={GananciaList} edit={GananciaEdit} create={GananciaCreate} />
            </Admin>
        </div>
    )
}