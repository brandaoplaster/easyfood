import restaurants from "../reducers/restaurants";

export const loadReastaurants = () => ({
    type: 'LOAD_RESTAURANTS',
    restaurants: restaurants
});