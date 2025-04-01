class RestaurantModel {
    id: number
    image: string
    highlight: boolean
    category: string
    name: string
    note: string
    description: string
    url: string

    constructor(
        id: number,
        image: string,
        highlight: boolean,
        category: string,
        name: string,
        note: string,
        description: string,
        url: string
    ) {
        this.id = id
        this.image = image
        this.highlight = highlight
        this.category = category
        this.name = name
        this.note = note
        this.description = description
        this.url = url
    }
}

export default RestaurantModel