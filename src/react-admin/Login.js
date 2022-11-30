import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-strapi-rest';
import authProvider from './authProvider'
import Cookies from './helpers/Cookies';
import { BASE_PATH } from "../utils/contans";

import { IngresoList, IngresoEdit, IngresoCreate } from './ingreso';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = Cookies.getCookie('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}



const dataProvider = simpleRestProvider(BASE_PATH, httpClient);

export default function Login(){
    return(
        <div>
        <Admin authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name="ingresos" list={IngresoList} edit={IngresoEdit} create={IngresoCreate} />
        </Admin>
        </div>
    )
}