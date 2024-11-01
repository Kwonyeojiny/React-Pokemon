import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

// slice가 만들어졌다는 것은 action, reducer가 만들어졌디는 것
// -> 리듀서를 전달해서 스토어를 만들수 있다는 뜻
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  // reducers는 '동기적'으로 작업할 때 사용 (현재 비동기적으로 데이터 받고있음)
  reducers: {},
  // 비동기적 상태 변경
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [1, 2, 3],
  reducers: {
    // redux toolkit은 immer라는 도구를 내장
    // 참조자료형을 건드려도 참조불변성 유지
    // 복사해서 새로 만들어넣는거처럼 상태를 잘 업데이트 시켜줌
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
