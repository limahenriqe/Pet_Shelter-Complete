const app = require("./app")
const sequelize = require("./src/config/database")

const PORT = process.env.PORT || 3000

async function startServer() {

    try {

        await sequelize.authenticate()

        console.log("Database connected successfully")

        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`)
        })

    } catch (error) {

        console.log("Database connection error:", error)

    }
}

startServer()