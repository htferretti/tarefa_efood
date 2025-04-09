import Product from "../Product"
import { List } from "./styles"

import { ProductModel } from "../../pages/RestaurantPage"

export type Props = {
    products: ProductModel[]
}

const ProductList = ({ products }: Props) => {

    return (
        <List>
        { products.map((product) => (
            <Product 
                key={product.id}
                image={product.foto}
                name={product.nome}
                description={product.descricao}
                description2={product.descricao}
                people={product.porcao}
                price={product.preco}
            />
            ))}
        </List>
    )
}

export default ProductList