import { ProductInterface } from '../../interfaces/product/ProductInterface';

export interface ProductSliceState {
    products: Array<ProductInterface>
    loading: boolean
    loaded: boolean
}