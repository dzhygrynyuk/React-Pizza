import React from "react";
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }){
    return(
        <div className="categories">
            <ul>
                <li 
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    All
                </li>
                {items && items.map((item, index) => (
                    <li 
                        key={`${item}_${index}`}
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    //activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
  };
  
Categories.defaultProps = { 
    activeCategory: null, 
    items: [] 
};

export default Categories;