import styled from "styled-components";

import background from '../../assets/images/fundo.png'
import { colors } from "../../styles";

export const Header = styled.header`
    background-image: url(${background});
    text-align: center;
    padding: 40px;
`

export const HeaderTitle = styled.h1`
    color: ${colors.red};
    font-size: 36px;
    font-weight: 900;
    margin-top: 80px;
`

export const List = styled.section`
    padding: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
`