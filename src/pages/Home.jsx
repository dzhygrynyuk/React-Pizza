import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector( ({ pizzas }) => pizzas.items );

    const onSelectCategory = index => {
        dispatch(setCategory(index));
    }

    return(
        <div className="container">
            <div className="content__top">
                <Categories 
                    items={['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese']} 
                    onClickItem={onSelectCategory}
                />
                <SortPopup items={[{name: 'popularity', type: 'popular'}, {name: 'price', type: 'price'}, {name: 'alphabet', type: 'alphabet'}]} />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {items && items.map(itemObj => 
                    <PizzaBlock key={itemObj.id} {...itemObj} />
                )}
            </div>
        </div>
    );
}

export default Home;