import express from 'express'
import { readDir } from '../common/utils'

const router = express.Router()

router.get('/', async (req, res) => {
  const moviesPath = process.env.MOVIES

  if (!moviesPath) {
    throw new Error('getMoviesPath: path not found in .env')
  }

  const files = await readDir(moviesPath)

  res.send(files)
})

export default router
