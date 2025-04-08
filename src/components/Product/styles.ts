import styled from "styled-components";
import Modal from 'react-modal'
import { colors } from "../../styles";

export const ProductDiv = styled.div`
    width: 472px;
    background: ${colors.red};
    padding: 16px;
    color: ${colors.biege};
    font-size: 14px;

    img {
        width: 100%;
    }

    h3 {
        font-size: 16px;
        margin-top: 16px;
    }

    p {
        margin: 16px 0;
    }

    button { 
        background: ${colors.biege};
        border: none;
        padding: 8px 0;
        width: 100%;
        color: ${colors.red};
        font-weight: 700;
        cursor: pointer;
    }
`

export const ProductModal = styled(Modal)`
    margin: 30vh auto;
    padding: 32px;
    background: ${colors.red};
    position: relative;
    font-size: 14px;
    color: ${colors.biege};
    display: flex;
    width: 1000px;

    img {
        margin-right: 32px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    p {
        margin: 16px 0;
    }
`

export const XButton = styled.button`
    position: absolute;
    top: 4px;
    right: 8px;
    font-size: 24px;
    border: none;
    background: none;
    color: ${colors.biege};
    cursor: pointer;
`

export const CartButton = styled.button`
    background: ${colors.biege};
    border: none;
    padding: 8px;
    color: ${colors.red};
    font-weight: 700;
    cursor: pointer;
`