import { Router } from "express";
import CreateEscrowDTO from "../dtos/create-escrow";
import Escrow from "../models/escrow";

const escrowsRouter = Router();


// GET /escrows

escrowsRouter.get('/', (request, response) => {
    return response.status(200).json({ message: 'Hello World from escrows' });
});


// POST /escrows

escrowsRouter.post('/', (request, response) => {
    const { arbiter, beneficiary, depositor, amount  } = request.body as CreateEscrowDTO;
    const escrow = new Escrow(arbiter, beneficiary, depositor, amount);
    return response.status(201).json(escrow);
});    

export default escrowsRouter;
