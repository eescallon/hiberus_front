'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectedShoppingState, getCartProducts } from "@/lib/features/shopping/shoppingSlice";
import Cookie from 'cookie-universal';
import { useEffect } from "react";
export const List = () => {
    const cookies = Cookie()
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCartProducts(cookies.get('shoppingId')))
    }, [])
    const shoppingState = useAppSelector(selectedShoppingState);
    const products = shoppingState.shoppingProduct
    
    return (
        <div className="container text-center">
            {products.map(product => {
                return (
                    <div className="row">
                        <div className="col">
                            <span>{product.product.name}</span>
                        </div>
                        <div className="col">
                            <span>{product.product.price}</span>
                        </div>
                        <div className="col">
                            <span>{product.amount}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}