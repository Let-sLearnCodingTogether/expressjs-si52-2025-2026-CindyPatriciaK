import express from "express"
import * as authcontroller from "../controler/authController.js"
import * as profileController from "../controler/profileController.js"
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router()

api.post ("/register", authcontroller.register)
api.post ("/login", authcontroller.login)

api.get('/me',protect ,profileController.privateProfile)

export default api 