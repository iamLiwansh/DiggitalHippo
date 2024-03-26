import dotenv from "dotenv"//dotenv used for storing senstive data or ye github pe push bhi nhi hota
import path from "path"
import type {InitOptions} from "payload/config"
import payload from"payload"

dotenv.config({
    path: path.resolve(__dirname,"../.env")//take this directory=>(__dirname says current dircotory) then go back to ../ directory and find .env 
})

//in production we used to store data
let cached = (global as any).payload//agar cached hai

if(!cached){
    cached = (global as any).payload ={
        client:null,
        promise:null,
    }
}//agar nhi hai

interface Args{
    initOptions?: Partial<InitOptions>
}
export const getPayloadClient = async ({initOptions}: Args ={}) =>  {
    if(!process.env.PAYLOAD_SECRET){
        throw new Error('PAYLOAD_SECRET is missing')
    }
    if(cached.client){
        return cached.client
    }
    if(!cached.promise){
        cached.promise =payload.init({
            secret:process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }
    try{
        cached.client = await cached.promise
    } catch(e : unknown){
        cached.promise = null
        throw e
    }

    return cached.client
}
//overview - we created a dbclient now we can use in entire app and we also store to cache the info.
//we can directly use getPayload for dbclient