import { Link, useLoaderData } from "react-router-dom";
import type { Product } from "../types";
import ProductDetails from "../components/ProductDetails";

export default function Products() {
  const products = useLoaderData() as Product[]

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-extrabold text-blue-500">Productos</h2>
        <Link to={'/productos/nuevo'} className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold">
          Registrar Producto
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2">Producto</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Disponibilidad</th>
                  <th className="p-2">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
    </div>
    </>
  )
}
