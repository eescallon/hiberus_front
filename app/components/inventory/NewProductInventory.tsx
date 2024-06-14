'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import { getAllProductsAsync, selectProductState } from "@/lib/features/product/productSlice";
import { addProductToInventoryAsync, selectedInventoryState } from "@/lib/features/inventory/inventorySlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { SaveProductRequest } from '@/src/model/types/SaveProductRequest';
import { SaveProductToInventoryRequest } from '@/src/model/types/SaveProductToInventoryRequest';
import { ProductInterface } from '@/src/model/interfaces/product/ProductInterface';

export const NewProductInventory = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const [newProduct, setNewProduct] = useState(0)
    const [isCountable, setIsCountable] = useState("true")
    const [amount, setAmount] = useState("0")
    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [])

    const productState = useAppSelector(selectProductState);
    const inventoryState = useAppSelector(selectedInventoryState);
    const products = productState.products

    const saveProductInventory = () => {
        let product: ProductInterface = {id: 0, name: "", price: 0}
        products.map(p => {
            if (p.id == newProduct){
                product = p
            }
        })
        let request: SaveProductToInventoryRequest = {
            product: product,
            amount: Number(amount),
            inventory: inventoryState.id,
            isCountable: Boolean(isCountable)
        }
        dispatch(addProductToInventoryAsync(request))
        router.push('/inventory')
    }
    
    return (
        <div className="container">
            <div className="row">
                <h1>Nuevo Producto Al Inventario</h1>
            </div>
            <div className="mb-3">
                <label className="form-label">Producto</label>
                <select className="form-select" aria-label="Producto" onChange={e => {setNewProduct(Number(e.target.value))}}>
                    <option selected>Selecciona un producto</option>
                    {products.map(product => {
                        return <option value={product.id}>{product.name}</option>
                    })}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" id="amountProduct" placeholder="Cantidad"/>
            </div>
            <div className="input-group mb-3">
                <input className="form-check-input" type="checkbox" value={isCountable} onChange={(e) => {isCountable == 'true' ? setIsCountable('false') : setIsCountable('true')}} id="isCountable" />
                <label className="form-check-label">
                Es Contable
                </label>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-success" onClick={() => saveProductInventory()}>Guardar</button>
            </div> 
        </div>
    )
}
