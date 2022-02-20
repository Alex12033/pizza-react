import React, { useCallback, useEffect } from "react";

import Categories from "../components/Categories";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";

import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/action/filters";
import { fetchPizzas } from "../redux/action/pizzas";
import { addPizzaToCart } from "../redux/action/cart";

const categoryNames = ["Meet", "Vegy", "Greel", "Hot", "Close"];

const sortNames = [
  { name: "popular", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopUp
          onClickSortType={onSelectSortType}
          activeSortType={sortBy}
          items={sortNames}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
