# Escrow Management API

The Escrow Management API is a Node.js application built with Express. It offers endpoints for creating, retrieving, and approving escrow contract.

## Getting Started

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`, accessible at `http://localhost:3000`.

## Endpoints

### GET /escrows

- Retrieve all escrows: `GET /escrows`
- Escrows by depositor: `GET /escrows/depositor/:depositor`
- Escrows by beneficiary: `GET /escrows/beneficiary/:beneficiary`
- Escrows by arbiter: `GET /escrows/arbiter/:arbiter`

### POST /escrows

- Create escrow: `POST /escrows`
  - Request Body: `{ "address", "arbiter", "beneficiary", "depositor", "amount" }`

### PUT /escrows

- Approve escrow: `PATCH /escrows/:address`

## Error Handling

API responses include appropriate status codes and error messages.

## Technologies

- Node.js
- Express
- MongoDB
- TypeScript
