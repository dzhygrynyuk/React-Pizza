import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese'];
const sortItems = [
    {name: 'popularity', type: 'popular', order: 'desc'}, 
    {name: 'price', type: 'price', order: 'desc'}, 
    {name: 'alphabet', type: 'name', order: 'asc'}
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector( ({ pizzas }) => pizzas.items );
    const cartItems = useSelector( ({ cart }) => cart.items );
    const isLoaded = useSelector( ({ pizzas }) => pizzas.isLoaded );
    const { category, sortBy } = useSelector( ({ filters }) => filters );

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback( (index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback( (type) => {
        dispatch(setSortBy(type));
    }, []);

    const onClickAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj));
    }

    return(
        <div className="container">
            <div className="content__top">
                <Categories 
                    activeCategory={category}
                    items={categoryNames} 
                    onClickCategory={onSelectCategory}
                />
                <SortPopup 
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {isLoaded 
                    ? items.map(obj => 
                        <PizzaBlock 
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                            onAddToCart={onClickAddPizza}
                            {...obj}
                        />
                    )
                    : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
                }
            </div>
        </div>
    );
}

export default Home;