import { ADD_ORER_ITEM } from "./action_types";

export const addOrderItem = (restaurant, product, quantity, comment) => {
    return {
        type: ADD_ORER_ITEM,
        restaurant: restaurant,
        product: product,
        quantity: quantity,
        comment: comment
    }
};
