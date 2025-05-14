import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import { CartProvider } from "./store/CartContext";
import Rotas from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </Provider>
  )
}

export default App;
