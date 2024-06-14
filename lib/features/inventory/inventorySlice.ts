import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SaveProductResponse } from "@/src/model/types/SaveProductResponse";
import { InventorySliceState } from "@/src/model/state/inventory/InventorySliceState";
import { GetInventoryResponse } from "@/src/model/types/GetInventoryResponse";
import { getInventory, saveProductToInventory } from "./inventoryAPI";
import { SaveProductToInventoryRequest } from "@/src/model/types/SaveProductToInventoryRequest";
import { saveProductToInventoryResponse } from "@/src/model/types/SaveProductToInventoryResponse";

const initialState: InventorySliceState = {
  id: 0,
  cartItems: [],
  loading: false,
};

export const inventorySlice = createAppSlice({
  name: "inventory",
  initialState,
  reducers: (create) => ({    
    addProductToInventoryAsync: create.asyncThunk(
      async (request: SaveProductToInventoryRequest) => {
        const response = await saveProductToInventory(request);
        return response.data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action: PayloadAction<saveProductToInventoryResponse>) => {
          state.loading = false;
          state.cartItems.push(action.payload.product);
        },
        rejected: (state) => {
          state.loading = false;
        },
      },
    ),
    getInventoryAsync: create.asyncThunk(
      async () => {
        const response = await getInventory();
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action: PayloadAction<GetInventoryResponse>) => {
          state.loading = false;
          state.id = action.payload.data.inventory.id
          state.cartItems = action.payload.data.products;
        },
        rejected: (state) => {
          state.loading = false;
        },
      },
    ),
  }),
  selectors: {
    selectedInventoryState: (inventory) => inventory,
  },
});

// Action creators are generated for each case reducer function.
export const { getInventoryAsync, addProductToInventoryAsync } = inventorySlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectedInventoryState } = inventorySlice.selectors;