import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  axios
    .get(
      // `/pizzas?${
      //   category !== null ? `category=${category}` : ""
      // }&_sort=${sortBy}&_order=desc`

      "https://62cddbfda43bf780085fe7b3.mockapi.io/pizzas"
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
