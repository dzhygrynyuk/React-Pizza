import { useState } from "react";

function Categories({ items }){
    const [activeItem, setActiveItem] = useState(null);

    return(
        <div className="categories">
            <ul>
                <li 
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => setActiveItem(null)}>
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li 
                        key={`${item}_${index}`}
                        className={activeItem === item ? 'active' : ''}
                        onClick={() => setActiveItem(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;