import RestaurantList from "../../components/RestaurantList";

import { useEffect, useState } from "react";

export type Restaurant = {
    id: number,
    titulo: string,
    descricao: string,
    tipo: string,
    avaliacao: number,
    capa: string,
    destacado: boolean
    url: string
}

const RestaurantsPages = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurants(res))
    }, [])

    return <RestaurantList restaurants={restaurants} />
}

export default RestaurantsPages