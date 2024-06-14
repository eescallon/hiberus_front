import { CartItemInterface } from "../../interfaces/inventory/CartItemInterface";

export interface InventorySliceState {
    id: number;
    cartItems: Array<CartItemInterface>
    loading: boolean
}