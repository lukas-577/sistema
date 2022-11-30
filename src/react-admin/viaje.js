import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';

const viajeFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="viajes" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const ViajeList = (props) => (
    <List filters={viajeFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="origen" />
            <TextField source="destino" />
            <TextField source="kilometros_recorrido" />
        </Datagrid>
    </List>
);

export const ViajeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="origen" />
            <TextInput source="destino" />
            <TextInput source="kilometros_recorrido" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const ViajeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="origen" />
            <TextInput source="destino" />
            <TextInput source="kilometros_recorrido" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);