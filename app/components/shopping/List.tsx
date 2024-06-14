'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getInventoryAsync, selectedInventoryState } from "@/lib/features/inventory/inventorySlice";
import Card from "./Card";
import { useEffect } from "react";
export const List = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getInventoryAsync())
    }, [])
    const inventoryState = useAppSelector(selectedInventoryState);
    const cartItems = inventoryState.cartItems
    return (
        <div className="container text-center">
            {cartItems.map((item, key) => {
                return <Card key={key} isCountable={item.countable} product={item.countable ? item.countableProduct.product : item.weightedProduct. product} />
            })}
        </div>
    )
}