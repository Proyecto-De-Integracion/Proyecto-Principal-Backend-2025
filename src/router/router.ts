import { Router } from "express";
import { greetingControl } from "../controllers/greeting.Controller.ts";

export const router = Router();

router.get("/", greetingControl);
