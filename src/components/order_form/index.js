import React, { Component } from 'react';
import { Box, Column, Title, Input, Field, Button, Control, Label } from 'rbx';
import { connect } from 'react-redux';

class OrderForm extends Component {
    render() {
        return (
            <Column.Group>
                <Column size={10} offset={1}>
                    <Title size={5} className="has-text-custom-gray-darker">
                        Finalizar Pedido
                    </Title>

                    <Box>
                        <Column.Group>
                            <Column size={10} offset={1}>
                                <form>
                                    <Field>
                                        <Label>Nome</Label>
                                        <Control>
                                            <Input type="text" placeholder="seu nome" name="name" />
                                        </Control>
                                    </Field>

                                    <Field>
                                        <Label>CPF</Label>
                                        <Control>
                                            <Input type="text" placeholder="000.000.000-00" name="cpf" />
                                        </Control>
                                    </Field>

                                    <Field>
                                        <Label>Telefone</Label>
                                        <Control>
                                            <Input type="phone_number" name="phone" />
                                        </Control>
                                    </Field>

                                    <Field>
                                        <br />
                                        <Title size={6} className="has-text-custom-gray-darker">
                                            Endereço de entrega
                                        </Title>
                                        <span>
                                            {this.props.address.street}, {this.props.address.number}
                                        </span>
                                        <span>
                                            {this.props.address.city}, {this.props.address.state}
                                        </span>
                                    </Field>

                                    <br />

                                    <Field kind="group" align="centered"> 
                                        <Control>
                                            <Button size="medium" color="custom-orange">
                                                <span className="has-text-white">
                                                    Realizar Pedido
                                                </span>
                                            </Button>
                                        </Control>
                                    </Field>
                                </form>
                            </Column>
                        </Column.Group>
                    </Box>
                </Column>
            </Column.Group>
        )
    }
}

const mapStateToProps = store => ({
    address: store.addressState.address
});

export default connect(mapStateToProps)(OrderForm);