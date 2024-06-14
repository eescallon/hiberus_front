'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Link from "next/link";
import { getInventoryAsync, selectedInventoryState } from "@/lib/features/inventory/inventorySlice";
import { CartItemInterface } from "@/src/model/interfaces/inventory/CartItemInterface";
import { ProductInterface } from "@/src/model/interfaces/product/ProductInterface";
export const Table = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getInventoryAsync())
    }, [])
    const inventoryState = useAppSelector(selectedInventoryState);
    const cartItems = inventoryState.cartItems
    
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <span>Listado de Productos</span>
                </div>
                <div className="col">
                <Link className="btn btn-primary" href="/inventory/new">Nuevo</Link>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem: CartItemInterface) => {
                        let product: ProductInterface = {id: 0, name:"", price: 0}
                        let amount = 0
                        if (cartItem.countable){
                            product = cartItem.countableProduct.product
                            amount = cartItem.countableProduct.totalAmount
                        } else {
                            product = cartItem.weightedProduct.product
                            amount = cartItem.weightedProduct.weight
                        }
                        return (
                            <tr>
                                <th scope="row">{cartItem.id}</th>
                                <th>{product.name}</th>
                                <th>{product.price}</th>
                                <th>{amount}</th>
                                <th></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}