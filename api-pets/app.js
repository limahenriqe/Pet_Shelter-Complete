const express = require("express")
const cors = require("cors")
const sequelize = require("./src/config/database")

const petsRoutes = require("./src/routes/petsRoutes.js")

const app = express()

app.use(cors())
app.use(express.json())

app.use('/pets', petsRoutes)

sequelize.sync()

module.exports = app