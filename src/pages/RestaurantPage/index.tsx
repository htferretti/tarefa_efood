import { useEffect, useState } from "react"


import Header from "../../components/Header"
import ProductList from "../../components/ProductList"

export type ProductModel = {
    id: number,
    nome: string,
    descricao: string,
    foto: string,
    porcao: string,
    preco: number
}

const RestaurantsPages = () => {
    const [products, setProducts] = useState<ProductModel[]>([])
    
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => {
                const allProducts = data.flatMap((restaurant: any) => restaurant.cardapio)
                setProducts(allProducts)
            })
    }, [])

    return (
        <>
            <Header />
            <ProductList products={products} />
        </>
    )
}

export default RestaurantsPages