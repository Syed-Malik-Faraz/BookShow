import express from 'express';
import cors from'cors';
import'dotenv/config'
import connectdb from './configs/db.js';

import { serve } from "inngest/express";
// import { inngest, functions } from "/inngest/index.js"
import { inngest, functions } from "./inngest/index.js";  // ✅ FIXED


import { clerkMiddleware } from '@clerk/express'


const app = express();
// app.use(clerkMiddleware())


const port = 3000

await connectdb()

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())


app.get('/' , (req , res)=>{
    res.send("Server is live ")
} )

app.use('/api/inngest', serve({
    client: inngest,
    functions,
    signingKey: process.env.INNGEST_SIGNING_KEY,
  })
);

// app.use('/api/inngest', serve({ client: inngest, functions }))

app.listen(port ,()=>{
    console.log(`server is listening on http://localhost:${port}`);
    
})