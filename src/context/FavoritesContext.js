import React, { createContext, useState,useContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesItems, setFavoritesItems] = useState([]);

  const addItemToFavorites = (item) => {
    setFavoritesItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromFavorites = (item) => {
    setFavoritesItems((prevItems) => {
      return prevItems.filter((i) => i.id !== item.id);
    });
  };

  const calculateTotalRating = () => {
    return favoritesItems.reduce((total, item) => {
      return total + item.rating;
    }, 0);
  };

  const values = {
    favoritesItems,
    addItemToFavorites,
    removeItemFromFavorites,
    calculateTotalRating
  };

  return <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>;
};

export const Favorites = () => {
  return useContext(FavoritesContext);
};