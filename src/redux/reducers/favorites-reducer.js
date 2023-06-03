import { createSlice } from "@reduxjs/toolkit";

const setItemsfunc = (items) => {
  localStorage.setItem("fav", JSON.stringify(items))
}

const favItems = localStorage.getItem("fav") !== null ? JSON.parse(localStorage.getItem("fav")) : [];

const initialState = {
  favorites: favItems
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      setItemsfunc(state.favorites);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
      setItemsfunc(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
