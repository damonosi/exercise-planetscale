import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CategoryState = {
  value: string;
};

const initialState = {
  value: "endurance",
} as CategoryState;

export const category = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: () => initialState,
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory, reset } = category.actions;
export default category.reducer;
