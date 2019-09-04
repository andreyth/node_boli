import knex from 'knex'

import config from './databases'

const env = process.env.NODE_ENV || 'development'
const envConfig = config[env]

module.exports = knex(envConfig)
