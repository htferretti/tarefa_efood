import { useParams } from "react-router-dom"

import Header from "../../components/Header"
import ProductList from "../../components/ProductList"

import restaurant2product1 from '../../assets/images/restaurant2product1.png'
import ProductModel from "../../models/ProductModel"

const HiokiSushi: ProductModel[] = [
    {
        id: 1,
        image: 'https://place-hold.it/250x150',
        name: 'Sushi',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed minima exercitationem explicabo dolor facilis blanditiis aperiam, consequatur et cupiditate, quod delectus, accusantium illo ex reprehenderit similique pariatur? Distinctio, ipsa iusto!',
        description2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis sapiente saepe quas nemo, expedita cupiditate eum iste sint tempore reiciendis neque amet, alias incidunt possimus modi facere doloribus nesciunt nobis.',
        people: 'Serve: 1 pessoa',
        price: 39.90
    }
]

const LaDolceVidaTrattoria: ProductModel[] = [
    {
        id: 1,
        image: restaurant2product1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        description2: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        people: 'Serve: de 2 a 3 pessoas',
        price: 60.90
    }
]

const RestaurantsPages = () => {
    const { restaurantName } = useParams<{ restaurantName: string }>()
    let products: ProductModel[] = []

    if (restaurantName === "hioki-sushi") {
        products = HiokiSushi
    } else if (restaurantName === "la-dolce-vita-trattoria") {
        products = LaDolceVidaTrattoria
    }

    return (
        <>
            <Header />
            <ProductList products={products} />
        </>
    )
}

export default RestaurantsPages