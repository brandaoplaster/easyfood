import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {Box} from "rbx";
import slickSettings from "./slick_settings";


class Categories extends Component{
    state = {
        categories: []
    }

    render() {
        return (
            <Fragment>
                <Box>
                    <Slider {...slickSettings}>

                    </Slider>
                </Box>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Categories);
