import { ProductInterface } from "../interfaces/product/ProductInterface";

export type SaveProductResponse = {
    success: boolean;
    message: string;
    product: ProductInterface
}