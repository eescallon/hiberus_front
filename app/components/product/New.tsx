'use client'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { addProductAsync } from "@/lib/features/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ProductInterface } from "@/src/model/interfaces/product/ProductInterface";
import { SaveProductRequest } from '@/src/model/types/SaveProductRequest';

export const New = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("0")
    const [isCountable, setIsCountable] = useState("true")
    const [amount, setTotalAmount] = useState("0")
    const saveNewProduct = () => {
        let newProduct: ProductInterface = {
            name: name,
            price: Number(price)
        }
        let request: SaveProductRequest = {
            product: newProduct,
        }
        dispatch(addProductAsync(request))
        router.push('/product')
    }
    return (
        <div className="container">
            <div className="row">
                <h1>Nuevo Producto</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="nameProduct" placeholder="Nombre"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Precio</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="priceProduct" placeholder="Precio"/>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-success" onClick={() => saveNewProduct()}>Guardar</button>
            </div>
        </div>
    )
}