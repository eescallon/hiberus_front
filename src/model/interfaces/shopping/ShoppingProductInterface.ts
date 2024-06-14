import { CartItemInterface } from "../inventory/CartItemInterface";
import { ProductInterface } from "../product/ProductInterface";

export interface ShoppingProductInterface {
    id: number,
    product: ProductInterface
    amount: number
    sellPrice: number
}