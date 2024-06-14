import { ProductInterface } from "./ProductInterface";

export interface CountableProductInterface {
    id: number;
    product: ProductInterface;
    totalAmount: number
}