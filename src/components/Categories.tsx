import React from 'react';

type categoriesPropsType = any;

const Categories = (props: categoriesPropsType) => {

    const onClickFunction = (index:any) => {
        props.setCategoryId(index)
    }

    const categories = [
        "Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((u, index) => <li key={index} onClick={() => onClickFunction(index)} className={props.categoryId === index ? "active" : ""}>{u}</li>)}
            </ul>
        </div>
    );
};



export default Categories;