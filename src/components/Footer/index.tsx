import { FooterContainer, SocialDiv } from "./styles"

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
    <FooterContainer>
        <img alt="efood" src={logo} ></img>
        <SocialDiv>
            <img alt="instagram" src={instagram} ></img>
            <img alt="facebook" src={facebook} ></img>
            <img alt="twitter" src={twitter} ></img>
        </SocialDiv>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </FooterContainer>
)

export default Footer