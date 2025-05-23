import { useState } from 'react'

import { useCart } from '../../store/CartContext';
import { ProductDiv, XButton, CartButton, ProductModal } from './styles'

type Props = {
    image: string
    name: string
    description: string
    description2: string
    people: string
    price: number
}

const Product = ({ image, name, description, description2, people, price }: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { addToCart } = useCart()

    const addAoCarrinho = () => {
        const id = Date.now() + Math.floor(Math.random() * 1000)

        addToCart({ id, image, name, price })
        setModalIsOpen(false)
    }

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value)
    }

    return (
        <>
            <ProductDiv>
                <div>
                    <img alt={image} src={image} />
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <button onClick={() => setModalIsOpen(true)}>Mais detalhes</button>
            </ProductDiv>

            <ProductModal
                isOpen={modalIsOpen}
            >
                <XButton onClick={() => setModalIsOpen(false)}>X</XButton>
                <img alt={image} src={image} />
                <div>
                    <h2>{name}</h2>
                    <p>{description2}</p>
                    <p>{people}</p>
                    <CartButton onClick={() => addAoCarrinho()}>Adicionar ao carrinho - R$ {formatNumber(price)}</CartButton>
                </div>
            </ProductModal>


        </>
    )
}

export default Product