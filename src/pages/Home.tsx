import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {

    const [items, setItems] = useState<Array<Object>>([]);
    const [isLoading, setLoading] = useState(true)

    const [categoryId, setCategoryId] = React.useState<any>(0);
    const [sortType, setSortType] = useState({name: "по популярности", sortProperty: "rating"});

    const [orderType, setOrderType] = useState("asc");


    useEffect(() =>{
        setLoading(true);
        fetch(`https://63e911c4b120461c6bea8c81.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${orderType}`)
            .then(res => {return res.json()})
            .then((arr) => {
            setItems(arr);
            setLoading(false);
        });
       window.scrollTo(0,0);
    }, [categoryId, sortType, orderType])

    return (
        <div className="container">
        <div className="content__top">
            <Categories categoryId={categoryId} setCategoryId={setCategoryId}/>
            <Sort sortType={sortType} setSortType={setSortType} setOrderType={setOrderType}/>
        </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
            items.map((obj, i) => <PizzaBlock key={i} {...obj}/>)
        }
    </div>
        </div>
    );

};

export default Home;