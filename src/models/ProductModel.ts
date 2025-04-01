class ProductModel {
    id: number
    image: string
    name: string
    description: string
    description2: string
    people: string
    price: number

    constructor(
        id: number,
        image: string,
        name: string,
        description: string,
        description2: string,
        people: string,
        price: number
    ) {
        this.id = id
        this.image = image
        this.name = name
        this.description = description
        this.description2 = description2
        this.people = people
        this.price = price
    }
}

export default ProductModel