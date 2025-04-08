import styled from "styled-components"
import { colors } from "../../styles"

export const FooterContainer = styled.footer`
    padding: 40px;
    background: ${colors.darkBiege};
    text-align: center;
    color: ${colors.red};

    > img {
        width: 125px;
    }

    p {
        font-size: 10px;
    }
`

export const SocialDiv = styled.div`
    margin: 40px auto 80px auto;
    width: 88px;
    display: flex;
    justify-content: space-between;
    
    img {
        width: 24px;
    }
`