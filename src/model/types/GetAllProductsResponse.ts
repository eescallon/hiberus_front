import { ProductInterface } from "../interfaces/product/ProductInterface";

export type GetAllProductsResponse = {
    success: boolean;
    data: Array<ProductInterface>
}