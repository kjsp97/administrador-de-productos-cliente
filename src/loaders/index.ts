import { redirect, type LoaderFunctionArgs } from "react-router-dom"
import { getProduct, getProductById } from "../services/ProductService"

export async function productsLoader() {
  const products = await getProduct()
  return products
}

export async function editProductLoader({params}: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const product = await getProductById(+params.id)
    if (product) {
      return product
    }else {
      return redirect('/')
    }
  }
}