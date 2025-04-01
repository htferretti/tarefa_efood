import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import { CartProvider } from "./components/CartContext";
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
