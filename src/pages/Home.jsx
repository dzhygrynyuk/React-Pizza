import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
    return(
        <div className="container">
            <div className="content__top">
                <Categories items={['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese']} />
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