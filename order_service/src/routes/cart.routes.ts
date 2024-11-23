import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.post("/cart", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "create cart"});
    return;
});

router.get("/cart", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "get cart"});
    return;
});

router.patch("/cart", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "update cart"});
    return;
});

router.delete("/cart", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "delete cart"});
    return;
});

export default router;