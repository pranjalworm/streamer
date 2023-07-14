import { readdir } from 'node:fs/promises'

export async function readDir(path: string) {
  try {
    return await readdir(path, { withFileTypes: true })
  } catch (err) {
    console.error(err)
  }
}

export function getMoviesPath() {
  const moviesPath = process.env.MOVIES

  if (!moviesPath) {
    throw new Error('getMoviesPath: path not found in .env')
  }

  return moviesPath
}
