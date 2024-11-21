import { Product } from "../models/product.model"

//interface of catalog repo
export interface ICatalogRepository {
    create (data: Product): Promise<Product>;
    update (data: Product): Promise<Product>;
    delete(id: any):any;
    find(limit: number, offset: number): Promise<Product[]>;
    findOne (id: number): Promise<Product>;
}