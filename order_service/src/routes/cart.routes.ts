import express, { NextFunction, Request, Response } from "express";
import * as service from "../service/cart.service";
import * as repository from "../repository/cart.repository";
import { ValidateRequest } from "../utils/validators";
import { CartRequestInput, CartRequestSchema } from "../dto/cartRequest.dto";

const router = express.Router();
const repo = repository.CartRepository;


router.post("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const error = ValidateRequest<CartRequestInput>(
        req.body,
        CartRequestSchema
      );

      if (error) {
         res.status(404).json({ error });
         return;
      }

      const input: CartRequestInput = req.body;

      const response = await service.CreateCart(
        input,
        repo
      );
      res.status(200).json(response);
      return
});

router.get("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const result = await service.GetCart(req.body, repo);
    res.status(200).json({result});
    return;
});

router.patch("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const result = await service.EditCart(req.body, repo);
    res.status(200).json({result});
    return;
});

router.delete("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const result = await service.DeleteCart(req.body, repo);
    res.status(200).json({result});
    return;
});

export default router;