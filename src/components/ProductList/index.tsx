import ProductModel from "../../models/ProductModel"
import Product from "../Product"
import { List } from "./styles"

export type Props = {
    products: ProductModel[]
}

const ProductList = ({ products }: Props) => {

    return (
        <List>
        { products.map((product) => (
            <Product 
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                description2={product.description2}
                people={product.people}
                price={product.price}
            />
            ))}
        </List>
    )
}

export default ProductList