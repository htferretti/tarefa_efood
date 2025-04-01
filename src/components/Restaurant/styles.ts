import styled from "styled-components";
import { Link } from 'react-router-dom'
import { colors } from "../../styles";

export const Container = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        display: block;
    }
`

export const Info = styled.div`
    background: ${colors.white};
    border: 1px solid ${colors.red};
    border-top: none;
    color: ${colors.red};
    padding: 16px;
    font-size: 14px;

    div {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 800;

        span {
            display: flex;
            align-items: center;

            img {
                margin-left: 8px;
            }
        }
    }

    p {
        margin: 16px 0;
    }
`

export const ButtonLink = styled(Link)`
    background: ${colors.red};
    color: ${colors.biege};
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
`

export const TagAbsolute = styled.div`
    position: absolute;
    display: flex;
    top: 8px;
    right: 8px;
    gap: 8px;
`