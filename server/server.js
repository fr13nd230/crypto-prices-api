
import { config } from 'dotenv'

config()

import express, { json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

const app = express()

const port = process.env.PORT || 8080
const phase = process.env.PHASE || "Production"

app.use( compression( ) )
app.use( json( ) )
app.use( urlencoded( { extended: true } ) )
app.use( cors( ) )
app.use( helmet( ) )

if ( phase == "Development" ) {
    app.use("/", (req, res, next) => {
        console.log(`${req.method} - ${req.path} - ${res.statusCode} - [${req.headers['user-agent']}]`)
    })
}

app.disable('x-powered-off')

app.listen( port, () => console.log(`http://localhost:${port}`) )