import React, { Component } from 'react';
import { Column } from 'rbx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Restaurant from "./restaurants";
import { loadRestaurants } from "../../actions/restaturant";

class ListRestaurants extends Component {
	componentWillMount() {
		this.props.loadRestaurants();
	}

	render() {
		return (
			<div className="restaurants-list">
				<h2 className="title is-size-4">Restaurantes</h2>

				<Column.Group multiline gapSize={2}>
					{
						this.props.restaurants.map(restaurant => {
							return <Restaurant {...restaurant} />
						})
					}
				</Column.Group>
			</div>
		)
	}
}

const mapStateToPropos = state => ({
	restaurants: Storage.restaurantsState.restaurants
});

const mapDispathToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch);

export default connect(mapStateToPropos, mapDispathToProps)(ListRestaurants);