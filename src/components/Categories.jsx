import { useState } from "react";

function Categories({ items }){
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (item) => {
        setActiveItem(item);
    }

    return(
        <div className="categories">
            <ul>
                <li 
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    All
                </li>
                {items && items.map((item, index) => (
                    <li 
                        key={`${item}_${index}`}
                        className={activeItem === item ? 'active' : ''}
                        onClick={() => onSelectItem(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;