import styled from "styled-components"
import { colors } from "../../styles"

export const FooterContainer = styled.footer`
    padding: 40px;
    background: ${colors.darkBiege};
    text-align: center;
    color: ${colors.red};

    p {
        font-size: 10px;
    }
`

export const SocialDiv = styled.div`
    margin: 40px 0 80px 0;
    
    img {
        margin: 0 8px 0 8px;
    }
`