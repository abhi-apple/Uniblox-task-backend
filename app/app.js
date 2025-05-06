// src/app/app.js
import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CORS config - adjust allowed origins for frontend
app.use(cors({
  origin: ['https://influencer-jobsforce.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  credentials: true,
}));

export default app;
