import { CartItemInterface } from "../interfaces/inventory/CartItemInterface";
import { InventoryInterface } from "../interfaces/inventory/InventoryInterface";

export type GetInventoryResponse = {
    success: boolean;
    data: {
        inventory: InventoryInterface
        products: Array<CartItemInterface>
    }
}