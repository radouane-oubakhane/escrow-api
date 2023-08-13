export default class Escrow {
    id: string;
    timestamp: number;
    constructor(
        public arbiter: string,
        public beneficiary: string,
        public depositor: string,
        public amount: number,
    ) {
        this.id = this.generateId();
        this.timestamp = Date.now();
    }


    generateId() {
        return this.id = Math.random().toString(36).substring(2, 15);
    }
}