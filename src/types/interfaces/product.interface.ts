export interface IProduct {
    name: string,
    description: string,
    category: string,
    brand: string,
    price: number,
    available: boolean,
    imageUrl: string,
    cloudinaryId: string,
}

export interface IProductGetRequest {
    name: string,
    description: string,
    category: IProductCategoryGetRequest,
    brand: string,
    price: number,
    available: boolean,
    imageUrl: string,
    cloudinaryId: string,
}

interface IProductCategoryGetRequest {
    _id: string,
    name: string,
}