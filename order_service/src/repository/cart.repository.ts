import { DB } from "../db/db.connection";
import { carts } from "../db/schema";
import {CartRepositoryType} from "../types/repository.type";

const createCart = async (input: any): Promise<{}> => {
    const result = await DB.insert(carts).values({
        customerId: input.customerId
    }).returning({cartId: carts.id});
    return Promise.resolve({message: "hey from create cart!", input, result});
}
const updateCart = async (input: any): Promise<{}> => {
    return Promise.resolve({});
}
const findCart = async (input: any): Promise<{}> => {
    const result = await DB.select().from(carts);
    return Promise.resolve({message: "finding cart", result });
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