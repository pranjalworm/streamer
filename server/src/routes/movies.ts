import express from 'express'
import path from 'path'
import { getMoviesPath, readDir } from '../common/utils'

const router = express.Router()

router.get('/', async (req, res) => {
  const moviesPath = getMoviesPath()

  const files = await readDir(moviesPath)

  if (!files || !files?.length) {
    res.send('No movies :(')
    return
  }

  let movieDirs: any = []

  for (const file of files) {
    if (file.isDirectory()) {
      movieDirs.push(file)
    }
  }

  res.send(movieDirs)
})

router.get('/:name', async (req, res) => {
  const { name } = req.params

  const moviesDirPath = getMoviesPath()

  const movieDirPath = path.resolve(moviesDirPath, name)
  const dirContent = await readDir(movieDirPath)

  const videoFile = dirContent?.find((content) => content.name.includes('mp4'))
  const videoFilePath = path.resolve(movieDirPath, videoFile?.name as string)

  console.log('videoFilePath', videoFilePath)

  res.send({ url: videoFilePath })
})

export default router
