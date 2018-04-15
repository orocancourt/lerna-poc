import axios from 'axios'
import { get } from 'lodash'
import logger from '../logger/logger'
import { env } from '../env/env'

async function getPath(path) {
  try {
    const url = `${env('API_URL')}${path}`
    const response = await axios.get(url, { json: true })
    return get(response, 'data')
  } catch (error) {
    logger.error(error.message)
  }
}

export default {
  get: getPath,
}
