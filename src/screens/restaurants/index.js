import React, { Fragament } from 'react';
import ListRestaurantes from "../../components/list_restaurants";
import Categories from "../../components/categories";

const Restaurants = () => (
    <Fragament>
        <Categories />
        <ListRestaurantes />
    </Fragament>
);

export default Restaurants;