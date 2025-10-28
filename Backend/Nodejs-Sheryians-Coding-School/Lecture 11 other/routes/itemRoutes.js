import express from "express";
import { createUser, getUsers } from "../Controllers/userController.js";

const router = express.Router();

router.post("/add", createUser);   // POST → send data to DB
router.get("/all", getUsers);      // GET → get all users

export default router;
