'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ProductInterface } from "@/src/model/interfaces/product/ProductInterface";
import { getAllProductsAsync, selectProductState } from "@/lib/features/product/productSlice";
import { useEffect } from "react";
import Link from "next/link";
export const Table = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [])
    const productState = useAppSelector(selectProductState);
    const products = productState.products
    

    console.log(products)
    
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <span>Listado de Productos</span>
                </div>
                <div className="col">
                <Link className="btn btn-primary" href="/product/new">Nuevo</Link>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: ProductInterface, key) => {
                        return (
                            <tr key={key}>
                                <th scope="row">{product.id}</th>
                                <th>{product.name}</th>
                                <th>{product.price}</th>
                                <th></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}