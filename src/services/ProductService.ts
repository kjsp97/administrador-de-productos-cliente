import { safeParse } from "valibot";
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product } from "../types";
import axios from "axios";

type AddProductType = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: AddProductType) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if (result.success) {
            const url = `${import.meta.env.VITE_LOCAL_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })

        }else{
            throw new Error("Datos inválidos")
        }
        
    } catch (error) {
        console.log(error)
    }
}

export async function getProduct() {
    try {
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/products`
        const {data} = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error("Error al mostrar productos...");
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getProductById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/products/${id}`
        const {data} = await axios(url)
        const result = safeParse(ProductSchema, data.data)
        
        if (result.success) {
            return result.output
        } else {
            throw new Error("Error al mostrar producto...");
        }
    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(data: AddProductType, id: Product['id']) {
    try {
        const result = safeParse(ProductSchema, {
            id: id,
            name: data.name,
            price: Number(data.price),
            availability: data.availability == 'true'
        })
        
        if (result.success) {
            const url = `${import.meta.env.VITE_LOCAL_URL}/api/products/${id}`
            await axios.put(url, result.output)
        }else{
            throw new Error("Datos inválidos")
        }
        
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}

export async function updateAvailability(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_LOCAL_URL}/api/products/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error)
    }
}