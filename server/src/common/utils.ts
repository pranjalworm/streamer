import { readdir } from 'node:fs/promises'

export async function readDir(path: string) {
  try {
    return await readdir(path)
  } catch (err) {
    console.error(err)
  }
}
