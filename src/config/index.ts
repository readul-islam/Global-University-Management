import dotenv from 'dotenv'
import path from 'path'
import httpStatusCode from 'http-status'
dotenv.config({path: path.join(process.cwd(), '.env')})


const port = process.env.PORT || 3000
const db_url = process.env.DB_URL 
const status = httpStatusCode
export {
port,
db_url,
status
}