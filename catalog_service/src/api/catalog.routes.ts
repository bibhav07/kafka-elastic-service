import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.post("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData = req.body;
        const result = await someAsyncFunction(productData);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
});

export default router;

const someAsyncFunction = async (data: any) => {
    return { id: 1, ...data };
};
