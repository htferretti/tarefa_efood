import { ButtonLink, Container, Info, TagAbsolute } from "./styles"

import estrela from '../../assets/images/estrela.png'
import Tag from "../Tag"

type Props = {
    image: string
    highlight: boolean
    category: string
    name: string
    note: string
    description: string
    url: string
}

const Restaurant = ({ image, highlight, category, name, note, description, url }: Props) => (
    <Container>
        <img alt="imagem" src={image} />
        <TagAbsolute>
            { highlight &&
                <Tag>Destaque da semana</Tag>
            }
            <Tag>{category}</Tag>
        </TagAbsolute>
        <Info>
            <div>
                <h4>{name}</h4>
                <span>{note} <img alt="estrela" src={estrela} /></span>
            </div>
            <p>{description}</p>
            <ButtonLink to={url} state={{ image, category, name }}>Saiba mais</ButtonLink>
        </Info>
    </Container>
)

export default Restaurant