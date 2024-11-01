import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice, favoriteSlice } from "./slice";

export const store = configureStore({
  // 어떤 리듀서를 전달할 것이다
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
