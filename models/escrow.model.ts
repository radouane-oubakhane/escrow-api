import mongoose from "mongoose";


const escrowSchema = new mongoose.Schema({
    address: String,
    arbiter: String,
    beneficiary: String,
    depositor: String,
    amount: Number,
    timestamp: Number,
    isApproved: Boolean,
    approvedTimestamp: Number,
});

const Escrow = mongoose.model('Escrow', escrowSchema);

export default Escrow;
