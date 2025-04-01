import { Routes, Route } from 'react-router-dom'
import RestaurantsPages from './pages/RestaurantsPage'
import RestaurantPages from './pages/RestaurantPage'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<RestaurantsPages />} />
        <Route path=":restaurantName" element={<RestaurantPages />} />
    </Routes>
)

export default Rotas
