import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm, ReferenceField } from 'react-admin';

const vehiculoFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="vehiculos" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const VehiculoList = (props) => (
    <List filters={vehiculoFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="patente" />
            <TextField source="modelo" />
            <TextField source="marca" />
            <TextField source="descripcion" />
            <TextField source="anio" />
            <ReferenceField source="viaje_id" reference="viajes">
                <TextField source="id" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const VehiculoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="patente" />
            <TextInput source="modelo" />
            <TextInput source="marca" />
            <TextInput source="descripcion" />
            <TextInput source="anio" />
            <ReferenceInput source="viaje_id" reference="viajes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const VehiculoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="patente" />
            <TextInput source="modelo" />
            <TextInput source="marca" />
            <TextInput source="descripcion" />
            <TextInput source="anio" />
            <ReferenceInput source="viaje_id" reference="viajes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);