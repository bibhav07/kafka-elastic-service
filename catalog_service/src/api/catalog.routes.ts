import express, { Request, Response, NextFunction } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repository/catalog.repository";
import { RequestValidator } from "../utils/requestValidators";
import { CreateProductRequest, UpdateProductRequest } from "../dto/product.dto";

const router = express.Router();
export const catalogService = new CatalogService(new CatalogRepository());

// POST /products - Create a new product
router.post(
    "/products",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const {errors, input} = await RequestValidator(CreateProductRequest, req.body);
            if(errors) {
                 res.status(400).json(errors);
                 return;
            }

            const data = await catalogService.createProduct(input);
            res.status(201).json(data); // Correctly respond without returning
        
        } catch (error) {
            const err = error as Error;
            res.status(500).json(err.message);
            return;      
        }
    }
);


//update product
router.patch("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {errors, input} = await RequestValidator(UpdateProductRequest, req.body);
        const id = parseInt(req.params.id) || 0;

        if(errors){
             res.status(400).json(errors);
             return;
        } 

        const data = await catalogService.updateProduct({id, ...input})
        res.status(200).json(data);
        return;

    } catch (error) {
        const err = error as Error;
        res.status(500).json(err.message); 
        return;
    }
} )

export default router;
