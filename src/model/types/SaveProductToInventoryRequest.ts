import { ProductInterface } from "../interfaces/product/ProductInterface"

export type SaveProductToInventoryRequest = {
    product: ProductInterface;
    amount: number;
    isCountable: boolean
    inventory: number
}