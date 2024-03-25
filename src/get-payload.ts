import dotenv from "dotenv"//dotenv used for storing senstive data or ye github pe push bhi nhi hota
import path from "path"

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
export const getPlayloadClient = async () =>  {}