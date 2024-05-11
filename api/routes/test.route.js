import express from "express"
import { shoudlBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
const router =  express.Router();


router.get("/should-be-logged-in" , shouldBeLoggedIn);
router.get("/should-be-admin" , shoudlBeAdmin );

export default router;