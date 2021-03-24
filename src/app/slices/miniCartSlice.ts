import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "data/types";

export interface MiniCartStore {
  items: ProductType[];
}

const initialState = {
  items: [] as ProductType[],
};

const miniCartSlice = createSlice({
  name: "miniCart",
  initialState,
  reducers: {
    miniCartAddItem(state, action: PayloadAction<ProductType>) {
      state.items = [...state.items, action.payload];
    },
    miniCartRemoveItem(state, action: PayloadAction<ProductType>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default miniCartSlice.reducer;

export const { miniCartAddItem, miniCartRemoveItem } = miniCartSlice.actions;
