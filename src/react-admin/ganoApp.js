import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';

const gananciaFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="ganancias" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const GananciaList = (props) => (
    <List filters={gananciaFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="ganancia" />
        </Datagrid>
    </List>
);

export const GananciaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="ganancia" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const GananciaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="ganancia" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);