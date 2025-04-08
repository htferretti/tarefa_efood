import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import * as Icon from 'react-bootstrap-icons'

import { useCart } from "../CartContext";
import { HeaderContainer, Banner, CartModal, CartProduct, CartValue, DivFlex } from "./styles"

import logo from '../../assets/images/logo.png'

const Header = () => {
    const { cart, removeFromCart, removeAll } = useCart()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const location = useLocation()
    const { image, category, name } = location.state || {}

    const productsLength = cart.length > 0

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value)
    }

    useEffect(() => {
        if (cart.length === 0 && modalIsOpen) {
            setModalIsOpen(false)
        }
    }, [cart.length, modalIsOpen])

    const totalPrice = cart.reduce((total, product) => total + product.price, 0)

    const [total, setTotal] = useState(true)
    const [entrega, setEntrega] = useState(false)
    const [pagamento, setPagamento] = useState(false)
    const [concluido, setConcluido] = useState(false)

    return (
    <>
        <HeaderContainer>
            <div>
                <div><h3>Restaurantes</h3></div>
                <div><img alt="efood" src={logo}></img></div>
                <div
                    onClick={productsLength ? () => setModalIsOpen(true) : undefined}
                    style={{ cursor: productsLength ? "pointer" : "default" }}
                >
                    <span>
                        {cart.length} produto(s) no carrinho
                    </span>
                </div>
            </div>
        </HeaderContainer>
        <Banner image={image}>
            <div><p>{category}</p>
            <h2>{name}</h2></div>
        </Banner>
        <CartModal isOpen={modalIsOpen}>
            { total &&
                <>
                    { cart.map((product) => (
                        <CartProduct>
                            <img alt={product.image} src={product.image} />
                            <div>
                                <h3>{product.name}</h3>
                                <p>R$ {formatNumber(product.price)}</p>
                            </div>
                            <Icon.Trash onClick={() => removeFromCart(product)}></Icon.Trash>
                        </CartProduct>
                    ))}
                    <CartValue><p>Valor total:</p><p>R$ {formatNumber(totalPrice)}</p></CartValue>
                    <button onClick={() => {setTotal(false); setEntrega(true)}}>Continuar com a entrega</button>
                </>
            }
            { entrega &&
                <>
                    <h2>Entrega</h2>
                    <p>quem irá receber</p>
                    <input />
                    <p>Endereço</p>
                    <input />
                    <p>Cidade</p>
                    <input />
                    <DivFlex>
                        <div>
                            <p>CEP</p>
                            <input />
                        </div>
                        <div>
                            <p>Número</p>
                            <input />
                        </div>
                    </DivFlex>
                    <p>Complemento (opcional)</p>
                    <input />
                    <button onClick={() => {setEntrega(false); setPagamento(true)}}>Continuar com o pagamento</button>
                    <button onClick={() => {setTotal(true); setEntrega(false)}}>Voltar para o carrinho</button>
                </>
            }
            { pagamento &&
                <>
                    <h2>Entrega - valor a pagar {formatNumber(totalPrice)}</h2>
                    <p>Nome do cartão</p>
                    <input />
                    <DivFlex>
                        <div>
                            <p>Número do cartão</p>
                            <input />
                        </div>
                        <div>
                            <p>CVV</p>
                            <input />
                        </div>
                    </DivFlex>
                    <DivFlex>
                        <div>
                            <p>Mês de vencimento</p>
                            <input />
                        </div>
                        <div>
                            <p>Ano de vencimento</p>
                            <input />
                        </div>
                    </DivFlex>
                    <button onClick={() => {setPagamento(false); setConcluido(true)}}>Finalizar pagamento</button>
                    <button onClick={() => {setEntrega(true); setPagamento(false)}}>Voltar para edição de endereço</button>
                </>
            }
            { concluido &&
                <>
                    <h2>Pedido realizado - {}</h2>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    <button onClick={() => {setModalIsOpen(false); setConcluido(false); setTotal(true); removeAll()}}>Voltar para o carrinho</button>
                </>
            }
        </CartModal>
    </>
)}

export default Header