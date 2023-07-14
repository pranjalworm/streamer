import express from 'express'
import cors from 'cors'
import moviesRouter from './routes/movies'
import { initConfig } from './common/config'

initConfig()

const app = express()

app.use(cors())

app.use('/movies', moviesRouter)

app.use('/', express.static('public'))

app.listen(process.env.PORT, () => {
  console.log(`Streamer listening on port: ${process.env.PORT}`)
})
