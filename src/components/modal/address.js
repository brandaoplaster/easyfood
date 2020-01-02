import React, { Component } from 'react';
import { Box, Icon, Column } from "rbx";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { hideModal } from "../../actions/modal";
import { FaTimes } from "react-icons/fa";
import AddressForm from '../address_form';

class AddressModel extends Component {
    render() {
        return (
            <Column.Group centered>
                <Column size="3" mobile={{'size': 10, 'offset': 1}} textAlign="centered">
                    <Box>
                        <Column.Group>
                            <Column size={12} textAlign="right">
                                <Icon color="has-custom-black" onClick={() => this.props.hideModel('ADDRESS_MODAL')}>
                                    <FaTimes />
                                </Icon>
                            </Column>
                        </Column.Group>
                        <AddressForm />
                    </Box>
                </Column>
            </Column.Group>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ hideModal }, dispatch);
export default connect(null, mapDispatchToProps)(AddressModel);
