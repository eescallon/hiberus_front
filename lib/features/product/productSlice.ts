import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductSliceState } from "@/src/model/state/product/ProductSliceState";
import { ProductInterface } from '../../../src/model/interfaces/product/ProductInterface';
import { 
  saveProduct,
  getAllProducts } from "./productAPI";
import { SaveProductResponse } from "@/src/model/types/SaveProductResponse";
import { GetAllProductsResponse } from "@/src/model/types/GetAllProductsResponse";
import { SaveProductRequest } from "@/src/model/types/SaveProductRequest";

const initialState: ProductSliceState = {
  products: [],
  loading: false,
  loaded: false
};

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: (create) => ({    
    addProductAsync: create.asyncThunk(
      async (request: SaveProductRequest) => {
        const response = await saveProduct(request);
        return response.data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action: PayloadAction<SaveProductResponse>) => {
          state.loading = false;
          state.products.push(action.payload.product);
        },
        rejected: (state) => {
          state.loading = false;
        },
      },
    ),
    getAllProductsAsync: create.asyncThunk(
      async () => {
        const response = await getAllProducts();
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.loading = true;
          state.loaded = true
        },
        fulfilled: (state, action: PayloadAction<GetAllProductsResponse>) => {
          console.log(action.payload)
          state.loading = false;
          state.products = action.payload.data;
          state.loaded = true
        },
        rejected: (state) => {
          state.loading = false;
        },
      },
    ),
  }),
  selectors: {
    selectProductState: (product) => product,
  },
});

// Action creators are generated for each case reducer function.
export const { addProductAsync, getAllProductsAsync } = productSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProductState } = productSlice.selectors;