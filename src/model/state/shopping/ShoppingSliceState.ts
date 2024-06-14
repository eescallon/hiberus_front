import { ShoppingInterface } from "../../interfaces/shopping/ShoppingInterface";
import { ShoppingProductInterface } from "../../interfaces/shopping/ShoppingProductInterface";

export interface ShoppingSliceState {
    shopping: ShoppingInterface
    shoppingProduct: Array<ShoppingProductInterface>
    messageError: string
}