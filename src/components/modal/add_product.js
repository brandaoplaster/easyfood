import React, { Component } from 'react';
import { Box, Column, Icon, Title } from "rbx";
import { FaTimes } from "react-icons/fa";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { hideModal } from "../../actions/modal";

class AddProductModal extends Component{
    render() {
        return (
            <Column.Group centered>
                <Column size={3} mobile={{'size': 10, 'offset': ''}}>
                    <Box>
                        <Column.Group>
                            <Column size={12} textAlign="right">
                                <Icon color="has-custom-black" onclick={() => this.props.hideModal('ADDRESS_MODAL') }>
                                    <FaTimes />
                                </Icon>
                            </Column>
                        </Column.Group>
                    </Box>
                </Column>
            </Column.Group>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ hideModal }, dispatch);
export default connect(null, mapDispatchToProps)(AddProductModal);
