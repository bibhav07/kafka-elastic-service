import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.post("/order", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "create order"});
    return;
});

router.get("/order", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "get order"});
    return;
});
router.get("/order/:id", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "get single order"});
    return;
});



router.delete("/order/:id", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({message: "delete order"});
    return;
});

export default router;