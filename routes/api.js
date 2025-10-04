import express from "express"
import * as authcontroller from "../controler/authController.js"

const api = express.Router()

api.post ("/register", authcontroller.register)

export default api 