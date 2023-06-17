const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzasItems = !state.items[action.payload.id] 
                    ? [action.payload] 
                    : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzasItems,
                    totalPrice: getTotalPrice(currentPizzasItems),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            };
        }

        case 'CLEAR_CART': {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {...state.items};
            const currentTotlaPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - currentTotalCount,
                totalPrice: state.totalPrice - currentTotlaPrice,
            };
        }

        default:
            return state;
    }
}

export default cart;