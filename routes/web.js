import express from "express"
import * as profileController from "../controler/profileController.js"
const web = express.Router()

web.get('/', (req,res) => {
    res.render('index')
})
web.get('/:username', (req, res)=>{
    res.render('index')

   })
web.get('/:username', profileController.publicProfile)

export default web 