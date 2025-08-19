
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import NewProduct from './views/NewProduct'
import EditProduct from './views/EditProduct'
import { deleteProductAction, editProductAction, newProductAction, updateAvailabilityAction } from './actions'
import { editProductLoader, productsLoader } from './loaders'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <Products />, loader: productsLoader, action: updateAvailabilityAction, hydrateFallbackElement: <p>Cargando...</p>},
            {path: '/productos/nuevo', element: <NewProduct />, action: newProductAction},
            {path: '/productos/:id/editar', element: <EditProduct />, loader: editProductLoader, action: editProductAction, hydrateFallbackElement: <p>Cargando...</p>},
            {path: 'productos/:id/eliminar', action: deleteProductAction},
        ]
    }
])