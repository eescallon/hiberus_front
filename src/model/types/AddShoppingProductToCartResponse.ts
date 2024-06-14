import { ShoppingProductInterface } from "../interfaces/shopping/ShoppingProductInterface";

export type AddShoppingProductToCartResponse = {
    sucess: boolean;
    product: ShoppingProductInterface;
}