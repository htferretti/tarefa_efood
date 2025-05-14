import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as Icon from 'react-bootstrap-icons'

import { useCart } from "../../store/CartContext";
import { HeaderContainer, Banner, CartModal, CartProduct, CartValue, DivFlex } from "./styles"

import logo from '../../assets/images/logo.png'
import { usePurchaseMutation } from "../../services/api"

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

    const [purchase, { data }] = usePurchaseMutation()

    const pagamentoFields = [
        'cardName',
        'cardNumber',
        'cardCode',
        'cardMonth',
        'cardYear'
    ]

    const form = useFormik({
        initialValues: {
            name: '',
            description: '',
            city: '',
            zipCode: '',
            number: 1,
            complement: '',
            cardName: '',
            cardNumber: '',
            cardCode: 1,
            cardMonth: 1,
            cardYear: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Campo obrigatório'),
            description: Yup.string().required('Campo obrigatório'),
            city: Yup.string().required('Campo obrigatório'),
            zipCode: Yup.string().required('Campo obrigatório'),
            number: Yup.number().required('Campo obrigatório'),
            complement: Yup.string(),

            cardName: Yup.string().required('Campo obrigatório'),
            cardNumber: Yup.string().required('Campo obrigatório'),
            cardCode: Yup.number().required('Campo obrigatório'),
            cardMonth: Yup.number().required('Campo obrigatório'),
            cardYear: Yup.number().required('Campo obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.name,
                    address: {
                        description: values.description,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.number),
                        complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNumber.toString(),
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.cardMonth),
                            year: Number(values.cardYear)
                        }
                    }
                },
                products: cart.map((product) => ({
                    id: product.id,
                    price: product.price
                }))
            })

        }
    })

    const handleEntregaContinue = async () => {
    const errors = await form.validateForm()

    const entregaFields = ['name', 'description', 'city', 'zipCode', 'number']
    const hasEntregaErrors = entregaFields.some(
        (field) => errors[field as keyof typeof errors]
    )

    if (!hasEntregaErrors) {
        setEntrega(false)
        setPagamento(true)
    } else {
        form.setTouched({
        name: true,
        description: true,
        city: true,
        zipCode: true,
        number: true
        })
    }
    }

    const handlePagamentoSubmit = async () => {
    const errors = await form.validateForm()

    const pagamentoFields = ['cardName', 'cardNumber', 'cardCode', 'cardMonth', 'cardYear']
    const hasPagamentoErrors = pagamentoFields.some(
        (field) => errors[field as keyof typeof errors]
    )

    if (!hasPagamentoErrors) {
        await form.submitForm() // dispara o onSubmit

        setPagamento(false)
        setConcluido(true)
    } else {
        form.setTouched({
        cardName: true,
        cardNumber: true,
        cardCode: true,
        cardMonth: true,
        cardYear: true
        })
    }
    }

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
                <form onSubmit={form.handleSubmit}>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    ></input>
                    
                    <label htmlFor="description">Endereço</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    ></input>

                    <label htmlFor="city">Cidade</label>
                    <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    ></input>
                    <DivFlex>
                        <div>
                            <label htmlFor="zipCode">CEP</label>
                            <input
                                id="zipCode"
                                type="text"
                                name="zipCode"
                                value={form.values.zipCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="number">Número</label>
                            <input
                                id="number"
                                type="text"
                                name="number"
                                value={form.values.number}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            ></input>
                        </div>
                    </DivFlex>
                    
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    ></input>

                    <button  onClick={handleEntregaContinue}>Continuar com o pagamento</button>
                    <button onClick={() => {setTotal(true); setEntrega(false)}}>Voltar para o carrinho</button>
                </form>
            }
            { pagamento &&
                <form onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                    if (!Object.keys(form.errors).some(key => pagamentoFields.includes(key))) {
                        setPagamento(false)
                        setConcluido(true)
                        form.submitForm() // Isso envia pra API
                    }
                    }}>
                    <h2>Entrega - valor a pagar {formatNumber(totalPrice)}</h2>

                    <label htmlFor="cardName">Nome do cartão</label>
                    <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    />

                    <DivFlex>
                    <div>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor="cardCode">CVV</label>
                        <input
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                    </div>
                    </DivFlex>

                    <DivFlex>
                    <div>
                        <label htmlFor="cardMonth">Mês de vencimento</label>
                        <input
                        id="cardMonth"
                        name="cardMonth"
                        type="text"
                        value={form.values.cardMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                    </div>
                    <div>
                        <label htmlFor="cardYear">Ano de vencimento</label>
                        <input
                        id="cardYear"
                        name="cardYear"
                        type="text"
                        value={form.values.cardYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        />
                    </div>
                    </DivFlex>

                    <button type="submit">Finalizar pagamento</button>
                    <button type="button" onClick={() => {
                    setEntrega(true)
                    setPagamento(false)
                    }}>Voltar para edição de endereço</button>
                </form>
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