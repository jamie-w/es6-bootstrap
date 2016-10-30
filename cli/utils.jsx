import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            {props.children}
            { help && <HelpBlock>{help}</HelpBlock> }
        </FormGroup>
    );
}

function slugify(title){
    return title.toLowerCase().replace(/([^a-z0-9]+)/g, '-')
}

module.exports = {
    FieldGroup,
    slugify
}
