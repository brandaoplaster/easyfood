import React, { Component } from 'react';
import { Box, Column, Title } from 'rbx';
import "../../styles/show_order.scss";

class ShowOrder extends Component {
    render() {
        return (
            <Column.Group className="status_box">
                <Column size={4} offset={4} textAlign="centered">
                    <Column.Group>
                        <Column size={4} offset={2} textAlign="centered">
                            <Box>
                                <Title size={4} className="has-text-custom-green-darker status_msg">
                                    Pedido a Caminho
                                </Title>
                                <p className="status_description">
                                    Em breve você recebera sua comida saudável em casa
                                </p>
                            </Box>
                        </Column>
                    </Column.Group>
                </Column>
            </Column.Group>
        )
    }
}

export default ShowOrder;