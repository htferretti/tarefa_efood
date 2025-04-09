import { Header, HeaderTitle, List } from "./styles"

import { Restaurant } from "../../pages/RestaurantsPage"

import logo from '../../assets/images/logo.png'
import RestaurantComponent from "../RestaurantComponent"

export type Props = {
    restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
    const sortRestaurants = (restaurants: Restaurant[]) => {
        return [...restaurants].sort((a, b) => {
            if (a.destacado && !b.destacado) return -1
            if (!a.destacado && b.destacado) return 1
            return a.titulo.localeCompare(b.titulo)
        })
    }

    return (
        <>
            <Header>
                <img alt="efood" src={logo}></img>
                <HeaderTitle>Viva experiências gastronômicas no conforto da sua casa</HeaderTitle>
            </Header>
            <List>
                { sortRestaurants(restaurants).map((restaurant) => (
                    <RestaurantComponent
                        key={restaurant.id}
                        image={restaurant.capa}
                        highlight={restaurant.destacado}
                        category={restaurant.tipo}
                        name={restaurant.titulo}
                        note={restaurant.avaliacao}
                        description={restaurant.descricao}
                    />
                ))}
            </List>
        </>
    )
}

export default RestaurantList