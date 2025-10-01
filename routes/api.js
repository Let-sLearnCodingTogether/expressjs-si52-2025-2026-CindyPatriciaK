import express from express;
import * as authocontroller from "..controler/authocontroller.js"

const api = express.router()

api.post ("/register", authocontroller.register)

export default api 