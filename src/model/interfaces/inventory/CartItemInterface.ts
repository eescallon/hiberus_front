import { CountableProductInterface } from "../product/CountableProductInterface";
import { ProductInterface } from "../product/ProductInterface";
import { WeightedProductInterface } from "../product/WeightedProductInterface";

export interface CartItemInterface {
    id: number;
    amount: number;
    countableProduct: CountableProductInterface
    countable: boolean
    weightedProduct: WeightedProductInterface
}