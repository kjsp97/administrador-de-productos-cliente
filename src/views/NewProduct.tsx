import { Link, Form, useActionData } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";


export default function NewProduct() {
  const error = useActionData() as string

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-extrabold text-blue-500">Registrar Producto</h2>
        <Link to={'/'} className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold">
          Volver a Productos
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
        <ProductForm />

        <input
          type="submit"
          className="mt-5 w-full bg-blue-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  )
}
