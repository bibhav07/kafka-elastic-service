import {CartRepositoryType} from "../types/repository.type";

const createCart = async (input: any): Promise<{}> => {
    return Promise.resolve({message: "hey from create cart!", input});
}
const updateCart = async (input: any): Promise<{}> => {
    return Promise.resolve({});
}
const findCart = async (input: any): Promise<{}> => {
    return Promise.resolve({});
}
const deleteCart = async (input: any): Promise<{}> => {
    return Promise.resolve({});
}

//this is cart repository
export const CartRepository: CartRepositoryType = {
    create: createCart,
    find: findCart,
    update: updateCart,
    delete:deleteCart
}