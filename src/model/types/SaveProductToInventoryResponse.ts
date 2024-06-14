import { CartItemInterface } from "../interfaces/inventory/CartItemInterface";

export type saveProductToInventoryResponse = {
    sucess: boolean;
    message: string;
    product: CartItemInterface
}