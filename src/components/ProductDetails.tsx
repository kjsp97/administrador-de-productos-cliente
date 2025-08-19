import { Form, useFetcher, useNavigate } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
    const navigate = useNavigate()
    const isAvailable = product.availability
    const fetcher = useFetcher()

    return (
        <tr className="border-b text-center">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="button"
                        name="id"
                        value={product.id}
                        className={`${isAvailable? 'text-blue-800' : 'text-red-700'} w-full border border-gray-300 rounded-lg text-xs uppercase font-bold p-2 cursor-pointer`}
                    >
                        {isAvailable? 'Disponible' : 'No disponible'}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => navigate(`/productos/${product.id}/editar`)}
                        className="cursor-pointer bg-amber-500 p-2 uppercase text-white w-full rounded-xl text-xs font-bold"
                    >
                        Editar
                    </button>
                    <Form
                        className="w-full"
                        method="POST"
                        action={`/productos/${product.id}/eliminar`}
                        onSubmit={e => {
                            if (!confirm('Deseas eliminar producto?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input type="submit" value='Eliminar' className="cursor-pointer bg-red-600 p-2 uppercase text-white w-full rounded-xl text-xs font-bold" />
                    </Form>
                </div>
            </td>
        </tr> 
    )
}
