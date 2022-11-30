import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';

const ingresoFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="ingresos" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const IngresoList = (props) => (
    <List filters={ingresoFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="ingreso" />
            <TextField source="valor" />
        </Datagrid>
    </List>
);

export const IngresoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="ingreso" />
            <TextInput multiline source="valor" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const IngresoCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="ingreso" />
                <TextInput multiline source="valor" />
                <BooleanInput source="published" />
            </SimpleForm>
        </Create>
    );