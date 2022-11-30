import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';

const gastoFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="gastos" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const GastoList = (props) => (
    <List filters={gastoFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="tag" />
            <TextField source="bencina" />
            <TextField source="descripcion" />
        </Datagrid>
    </List>
);

export const GastoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="tag" />
            <TextInput source="bencina" />
            <TextInput source="descripcion" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const GastoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="tag" />
            <TextInput source="bencina" />
            <TextInput source="descripcion" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);