import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectProductState } from '@/lib/features/product/productSlice';

const useProduct = () => {
    const products = useAppSelector(selectProductState);

    const getAllProducts = () => {
        return products
    }

    return (
        getAllProducts
    )
}

export default useProduct