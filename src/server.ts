import express from "express"

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    const payload = await getPayloadClient()//this is the admin dashboard statup(we can also use a db client to fetch or add data into the database)
}

start()