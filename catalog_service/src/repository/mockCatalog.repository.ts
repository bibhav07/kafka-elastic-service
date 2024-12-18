import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

//to test repository of catalog
export class MockCatalogRepository implements ICatalogRepository {
    create(data: Product): Promise<Product> {
        const mockProduct = {
            id: 123,
            ...data
        } as Product;
        return Promise.resolve(mockProduct);
    }
    update(data: Product): Promise<Product> {
        return Promise.resolve(data as unknown as Product);
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    find(limit: number, offset: number): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
}