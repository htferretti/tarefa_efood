import { Header, HeaderTitle, List } from "./styles"

import logo from '../../assets/images/logo.png'
import Restaurant from "../Restaurant"
import RestaurantModel from '../../models/RestaurantModel';

export type Props = {
    restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <>
        <Header>
            <img alt="efood" src={logo}></img>
            <HeaderTitle>Viva experiências gastronômicas no conforto da sua casa</HeaderTitle>
        </Header>
        <List>
            { restaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.id}
                    image={restaurant.image}
                    highlight={restaurant.highlight}
                    category={restaurant.category}
                    name={restaurant.name}
                    note={restaurant.note}
                    description={restaurant.description}
                    url={restaurant.url}
                />
            ))}
        </List>
    </>
)

export default RestaurantList