import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingSliceState } from "@/src/model/state/shopping/ShoppingSliceState";
import { AddShoppingProductToCartRequest } from "@/src/model/types/AddShoppingProductToCartRequest";
import { addShoppingProductToCartAsync, createShoppingAsync, getCartProductsAsync } from "./shoppingAPI";
import { AddShoppingProductToCartResponse } from "@/src/model/types/AddShoppingProductToCartResponse";
import { CreateShoppingRequest } from "@/src/model/types/CreateShoppingRequest";
import { CreateShoppingResponse } from "@/src/model/types/CreateShoppingResponse";
import Cookie from 'cookie-universal';
import { GetCartProductsResponse } from "@/src/model/types/GetCartProductsResponse";

const initialState: ShoppingSliceState = {
  shopping: {
    id: 0,
  },
  shoppingProduct: [],
  messageError: ''
};
const cookies = Cookie()

export const shoppingSlice = createAppSlice({
  name: "shopping",
  initialState,
  reducers: (create) => ({
    addShoppingProductToCart: create.asyncThunk(
      async (request: AddShoppingProductToCartRequest) => {
        const response = await addShoppingProductToCartAsync(request);
        return response;
      },
      {
        fulfilled: (state, action: PayloadAction<AddShoppingProductToCartResponse>) => {
          state.shoppingProduct.push(action.payload.product);
        },
        rejected: (state) => {
          state.messageError = "failed";
        },
      },
    ),
    createShopping: create.asyncThunk(
      async () => {
        const response = await createShoppingAsync();
        return response;
      },
      {
        fulfilled: (state, action: PayloadAction<CreateShoppingResponse>) => {
          state.shopping = action.payload.shopping;
          cookies.set('shoppingId', action.payload.shopping.id)
        }
      },
    ),
    getCartProducts: create.asyncThunk(
      async (id: number) => {
        const response = await getCartProductsAsync(id);
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        fulfilled: (state, action: PayloadAction<GetCartProductsResponse>) => {
          state.shoppingProduct = action.payload.data
        }
      },
    ),
  }),
  selectors: {
    selectedShoppingState: (shopping) => shopping,
  },
});

// Action creators are generated for each case reducer function.
export const { addShoppingProductToCart, createShopping, getCartProducts } = shoppingSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectedShoppingState } = shoppingSlice.selectors;