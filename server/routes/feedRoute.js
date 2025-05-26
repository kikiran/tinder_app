import express from 'express';
import { getFeed } from '../controllers/feedController.js';

const feedRouter = express.Router();

feedRouter.get("/feed", getFeed);


export default feedRouter;