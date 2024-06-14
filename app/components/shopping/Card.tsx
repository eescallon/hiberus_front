'use client'
import { useLayoutEffect, useState } from "react";
import Cookie from 'cookie-universal';
import { useCookies } from 'react-cookie';
import { addShoppingProductToCart, createShopping, selectedShoppingState } from "@/lib/features/shopping/shoppingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ProductInterface } from "@/src/model/interfaces/product/ProductInterface"
import { AddShoppingProductToCartRequest } from "@/src/model/types/AddShoppingProductToCartRequest";
interface CardInterface {
    product: ProductInterface,
    isCountable: boolean
}

export default function Card({
    product,
    isCountable
}: CardInterface) {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState("0");
    const shoppingState = useAppSelector(selectedShoppingState);
    const cookies = Cookie()
    const addProduct = async () => {
        console.log(shoppingState)
        let shoppingIdCookie = cookies.get('shoppingId')
        shoppingIdCookie = shoppingIdCookie !== undefined ? shoppingIdCookie : 0
        let shoppingId = shoppingIdCookie
        if (shoppingIdCookie == 0) {
            await dispatch(createShopping())
        }
        let request: AddShoppingProductToCartRequest = {
            product: product,
            isCountable: isCountable,
            idShopping: shoppingId,
            amount: Number(amount)
        }
        dispatch(addShoppingProductToCart(request))
    }

    // useLayoutEffect(() => {
    //     setCookie('shoppingId', shoppingState.shopping.id)
    // }, [shoppingState.shopping.id])
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="card-text">
                    <div className="row">
                        <div className="col">
                            {product.price}
                        </div>
                        <div className="col">
                            <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => addProduct()}>Añadir al carrito</button>
            </div>
        </div>
    )
}