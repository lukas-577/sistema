import React from 'react';
import { ReferenceInput, BooleanInput, SelectInput, List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm } from 'react-admin';

const ganoFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="title" label="Title" reference="ganos" allowEmpty>
        <SelectInput optionText="title" />
    </ReferenceInput>,
];

export const GanoList = (props) => (
    <List filters={ganoFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="gano" />
        </Datagrid>
    </List>
);

export const GanoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="gano" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Edit>
);


export const GanoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="gano" />
            <BooleanInput source="published" />
        </SimpleForm>
    </Create>
);