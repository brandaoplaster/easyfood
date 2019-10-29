import React, { Component } from 'react';
import { Column } from 'rbx';

class ListRestaurants extends Component {
    render() {
        return (
            <div className="restaurant-list">
                <h2 className="title is-size-4">restaurantes</h2>
                <Column.Group multiline gapSize={2}>
                    restaurant...
                </Column.Group>
            </div>
        )
    }
}

export default ListRestaurants;