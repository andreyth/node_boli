import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from 'application/routes'

function setupApp () {
  const app = express()
  const env = process.env.NODE_ENV || 'development'

  const corsOptions = {
    origin: '*',
    credentials: true
  }

  _setMiddlewares()
  _setRoutes()

  function _setMiddlewares () {
    app.use(cors(corsOptions))

    if (env !== 'production') {
      app.use(morgan('dev'))
    }

    app.get('/favicon.ico', (req, res) => res.status(204))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
  }

  function _setRoutes () {
    routes(app)
  }

  function getApp () {
    return app
  }

  return { getApp }
}

export default setupApp().getApp()
