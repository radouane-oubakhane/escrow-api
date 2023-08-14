import { Router } from "express";
import CreateEscrowDTO from "../dtos/create-escrow";
import Escrow from "../models/escrow.model";
const escrowsRouter = Router();


// GET /escrows ////////////////////////////////


// git all escrows
escrowsRouter.get('/', async (request, response) => {
    try {
        const escrows = await Escrow.find();
        console.log('Escrows found: ', escrows);
        return response.status(200).json(escrows); 
    } catch (error) {
        console.log('Error in GET /escrows: ', error);
        return response.status(500).json({ error: error });
    }
});

// git all escrows for a given depositor
escrowsRouter.get('/depositor/:depositor', async (request, response) => {
    try {
        const depositor = request.params.depositor;
        const escrows = await Escrow.find({ depositor: depositor });
        console.log('Escrows found: ', escrows);
        return response.status(200).json(escrows);
    } catch (error) {
        console.log('Error in GET /escrows/depositor/:depositor: ', error);
        return response.status(500).json({ error: error });
    }
});

// git all escrows for a given beneficiary
escrowsRouter.get('/beneficiary/:beneficiary', async (request, response) => {
    try {
        const beneficiary = request.params.beneficiary;
        const escrows = await Escrow.find({ beneficiary: beneficiary });
        console.log('Escrows found: ', escrows);
        return response.status(200).json(escrows);
    } catch (error) {
        console.log('Error in GET /escrows/beneficiary/:beneficiary: ', error);
        return response.status(500).json({ error: error });
    }
});

// git all escrows for a given arbiter
escrowsRouter.get('/arbiter/:arbiter', async (request, response) => {
    try {
        const arbiter = request.params.arbiter;
        const escrows = await Escrow.find({ arbiter: arbiter });
        console.log('Escrows found: ', escrows);
        return response.status(200).json(escrows);
    } catch (error) {
        console.log('Error in GET /escrows/arbiter/:arbiter: ', error);
        return response.status(500).json({ error: error });
    }
});

// POST /escrows ////////////////////////////////

// create a new escrow
escrowsRouter.post('/', async (request, response) => {
    try {
        const { arbiter, beneficiary, depositor, amount } = request.body as CreateEscrowDTO;
        const timestamp = Date.now();
        const approvedTimestamp = null;
        const isApproved = false;
        const newEscrow = new Escrow({ arbiter, beneficiary, depositor, amount, timestamp, isApproved, approvedTimestamp });
        const savedEscrow = await newEscrow.save();
        console.log('Escrow saved: ', savedEscrow);
        return response.status(201).json(savedEscrow);
    } catch (error) {
        console.log('Error in POST /escrows: ', error);
        return response.status(500).json({ error: error });
    }
});    


// PUT /escrows ////////////////////////////////


// Approve an escrow    
escrowsRouter.put('/approve/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const approvedTimestamp = Date.now();
        const isApproved = true;
        const updatedEscrow = await Escrow.findByIdAndUpdate(id, { approvedTimestamp, isApproved }, { new: true });
        console.log('Escrow updated: ', updatedEscrow);
        return response.status(200).json(updatedEscrow);
    } catch (error) {
        console.log('Error in PUT /escrows/approve/:id: ', error);
        return response.status(500).json({ error: error });
    }
});


export default escrowsRouter;


