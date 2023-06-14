import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese'];
const sortItems = [
    {name: 'popularity', type: 'popular'}, 
    {name: 'price', type: 'price'}, 
    {name: 'alphabet', type: 'alphabet'}
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector( ({ pizzas }) => pizzas.items );
    const isLoaded = useSelector( ({ pizzas }) => pizzas.isLoaded );

    useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    const onSelectCategory = React.useCallback( (index) => {
        dispatch(setCategory(index));
    }, []);

    return(
        <div className="container">
            <div className="content__top">
                <Categories 
                    items={categoryNames} 
                    onClickItem={onSelectCategory}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {isLoaded 
                    ? items.map(itemObj => <PizzaBlock key={itemObj.id} {...itemObj} />)
                    : Array(12).fill(<PizzaLoadingBlock />)
                }
            </div>
        </div>
    );
}

export default Home;