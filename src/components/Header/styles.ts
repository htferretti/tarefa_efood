import styled from "styled-components"
import Modal from 'react-modal'

import background from '../../assets/images/fundo.png'
import { colors } from "../../styles"

type Props = {
    image: string
}

export const HeaderContainer = styled.header`
    background-image: url(${background});
    padding: 40px 0;

    > div {
        width: 1024px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${colors.red}
    }
`

export const Banner = styled.div<Props>`
    background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    padding: 40px;
    color: ${colors.white};
    font-size: 32px;


    div {
        width: 1024px;
        margin: 0 auto;
    }

    p {
        font-weight: 100;
        margin-bottom: 10vw;
    }

    h2 {
        font-weight: 900;
    }
`

export const CartModal = styled(Modal)`
    background: ${colors.red};
    color: ${colors.darkBiege};
    position: absolute;
    width: 360px;
    height: 100%;
    right: 0;
    padding: 8px;

    img {
        margin-right: 32px;
    }

    label {
        font-size: 18px;
    }

    p {
        margin: 16px 0;
    }

    input {
        width: 100%;
        background: ${colors.darkBiege};
        border: none;
        padding: 8px;
        margin-bottom: 18px;
    }

    button {
        width: 100%;
        border: none;
        background: ${colors.darkBiege};
        padding: 8px;
        color: ${colors.red};
        font-weight: 700;
        cursor: pointer;
        margin-top: 16px;
    }
`

export const DivFlex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`

export const CartProduct = styled.div`
    display: flex;
    background: ${colors.darkBiege};
    padding: 8px;
    color: ${colors.red};
    margin-bottom: 8px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        margin-right: 8px;
    }

    svg {
        position: absolute;
        bottom: 8px;
        right: 8px;
        font-size: 16px;
        cursor: pointer;
    }
`

export const CartValue = styled.div`
    color: ${colors.darkBiege};
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
`