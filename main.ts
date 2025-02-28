import { Request, Response } from "express";

const express = require('express')
const app = express()
const port = 3000

export interface DataPoint {
  date: string;
  country: string;
  store: string;
  expected_orders: number;
  expected_sales_eur: number;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export { app, server };
