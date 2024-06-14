import { ShoppingProductInterface } from "../interfaces/shopping/ShoppingProductInterface";

export type GetCartProductsResponse = {
    sucess: boolean
    data: Array<ShoppingProductInterface>;
}