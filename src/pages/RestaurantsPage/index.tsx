import RestaurantList from "../../components/RestaurantList";
import RestaurantModel from "../../models/RestaurantModel";

import restaurant1 from '../../assets/images/restaurant1.png'
import restaurant2 from '../../assets/images/restaurant2.png'

const restaurants: RestaurantModel[] =[
    {
        id: 1,
        image: restaurant1,
        highlight: true,
        category: 'Japonesa',
        name: 'Hioki Sushi',
        note: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        url: '/hioki-sushi'
    }, 
    {
        id: 2,
        image: restaurant2,
        highlight: false,
        category: 'Italiana',
        name: 'La Dolce Vita Trattoria',
        note: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        url: '/la-dolce-vita-trattoria'
    },
    {
        id: 3,
        image: restaurant2,
        highlight: false,
        category: 'Italiana',
        name: 'La Dolce Vita Trattoria',
        note: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        url: '/la-dolce-vita-trattoria'
    },
    {
        id: 4,
        image: restaurant2,
        highlight: false,
        category: 'Italiana',
        name: 'La Dolce Vita Trattoria',
        note: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        url: '/la-dolce-vita-trattoria'
    },
    {
        id: 5,
        image: restaurant2,
        highlight: false,
        category: 'Italiana',
        name: 'La Dolce Vita Trattoria',
        note: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        url: '/la-dolce-vita-trattoria'
    },
    {
        id: 6,
        image: restaurant2,
        highlight: false,
        category: 'Italiana',
        name: 'La Dolce Vita Trattoria',
        note: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        url: '/la-dolce-vita-trattoria'
    },
]

const RestaurantsPages = () => (
    <RestaurantList restaurants={restaurants} />
)

export default RestaurantsPages