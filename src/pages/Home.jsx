import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ pizzas }) {
    return(
        <div className="container">
            <div className="content__top">
                <Categories items={['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese']} />
                <SortPopup items={['popularity', 'price', 'alphabet']} />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {pizzas && pizzas.map(itemObj => 
                    <PizzaBlock key={itemObj.id} {...itemObj} />
                )}
            </div>
        </div>
    );
}

export default Home;