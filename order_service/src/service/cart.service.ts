import { CartRepositoryType } from "../types/repository.type"
import { GetProductDetails } from "../utils/broker";

export const CreateCart = async (input: any, repo: CartRepositoryType) => {

    //before adding to cart will check if product is in stock
    const product = await GetProductDetails(input.productId);

    //if stock is less then order quantity throw error
    if(product.stock < input.qty) {
        throw new Error("product is out of stock....");
    }
    const data = await repo.create(input);
    return data
}

export const GetCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.find(input);
    return data
}
export const EditCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.update(input);
    return data
}
export const DeleteCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.delete(input);
    return data
}