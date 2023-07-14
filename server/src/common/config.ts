import dotenv from 'dotenv'
import { ENV } from './constants'

export const initConfig = () => {
  // project running in local or raspberry pi
  const env = process.argv[2] as ENV

  if (!env) {
    throw new Error('Provide env!')
  }

  let path

  switch (env) {
    case ENV.Local:
      path = '.env'
      break

    case ENV.RaspBerry:
      path = '.env.rasp'
      break
  }

  dotenv.config({ path })
}
