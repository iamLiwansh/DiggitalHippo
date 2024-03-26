import express from "express"
import { getPayloadClient } from "./get-payload"


const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    const payload = await getPayloadClient({//this is the admin dashboard statup(we can also use a db client to fetch or add data into the database)
        initOptions:{
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`admin URL ${cms.getAdminURL()}`)
            }
        }
    })
}

start()