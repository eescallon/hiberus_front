import { ProductInterface } from "../interfaces/product/ProductInterface"

export type AddShoppingProductToCartRequest = {
    product: ProductInterface
    amount: number
    idShopping: number
    isCountable: boolean
}