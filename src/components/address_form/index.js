import React, {Component, Fragment} from 'react';
import { Column, Title, Field, Control, Label, Select, Button, Input } from "rbx";
import states_list from "./states_list";

class AddressForm extends Component {
    render() {
        return (
            <Fragment>
                <Column.Group>
                    <Column size={10} offset={1}>
                        <Title size={5} className="has-text-custom-gray-darker status_mg">
                            Endereço de entrega
                        </Title>
                    </Column>
                </Column.Group>
                <Column.Group>
                    <Column size={10} offset={1}>
                        <form>
                            <Field>
                                <Label>Estados</Label>
                                <Control>
                                    <Select.Container fullwidth>
                                        <Select required>
                                            {
                                                states_list.map((state, i) => {
                                                    return <Select.Option key={i} value={state}></Select.Option>
                                                })
                                            }
                                        </Select>
                                    </Select.Container>
                                </Control>
                            </Field>

                            <Field>
                                <Label>Cidade</Label>
                                <Control>
                                    <Input type="text" placeholder="Cidade" required />
                                </Control>
                            </Field>

                            <Field>
                                <Label>Endereço</Label>
                                <Control>
                                    <Input type="text" placeholder="Endereço" required />
                                </Control>
                            </Field>

                            <Field horizontal>
                                <Field.Body>
                                    <Label>Numero</Label>
                                    <Control>
                                        <Input type="text" placeholder="1" required />
                                    </Control>
                                </Field.Body>
                            </Field>

                            <Field>
                                <Label>Cep</Label>
                                <Control>
                                    <Input type="text" placeholder="0000-000" required />
                                </Control>
                            </Field>

                            <Field>
                                <Label>Complemento</Label>
                                <Control>
                                    <Input type="text" placeholder="Complemento" />
                                </Control>
                            </Field>

                            <Field>
                                <Label>Referência</Label>
                                <Control>
                                    <Input type="text" placeholder="Referência" />
                                </Control>
                            </Field>
                            <br />
                            <Field kind="group" align="centered">
                                <Control>
                                    <Button size="medium" color="custom-orange">
                                        <span className="hast-text-white">
                                            Salvar Endereço
                                        </span>
                                    </Button>
                                </Control>
                            </Field>

                        </form>
                    </Column>
                </Column.Group>
            </Fragment>
        )
    }
}

export default AddressForm;
