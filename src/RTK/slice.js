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
