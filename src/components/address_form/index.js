import React, { Component } from 'react';
import { Column, Title } from "rbx";

class AddressForm extends Component {
    render() {
        return (
            <Column size={10} offset={1}>
                <Title size={6} className="hast-text-custom-grey-darken status_msg">
                    Endereço de entrega
                </Title>
            </Column>
        )
    }
}

export default AddressForm;
