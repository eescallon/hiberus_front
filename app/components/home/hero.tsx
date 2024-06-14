import Link from "next/link";

export const Hero = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="logo.png" alt="" width="72" height="57" />
            <h1 className="display-5 fw-bold text-body-emphasis">Carrito de Compras</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Aplicacion para manejo de inventario con productos por cantidad o peso y un carrito de compras para poder seleccionar productos y agregarlos</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link className="btn btn-primary btn-lg px-4 gap-3" href="/product">Gestion de Productos</Link>
                <Link className="btn btn-primary btn-lg px-4 gap-3" href="/inventory">Gestion de Inventario</Link>
                <Link className="btn btn-primary btn-lg px-4 gap-3" href="/shopping">Ir de compras</Link>
            </div>
            </div>
        </div>
    )
}