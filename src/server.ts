import express from 'express'
import payload from 'payload'
import {routes} from './routes/routes'
import bodyParser from 'body-parser'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

require('dotenv').config()
const swaggerFile = YAML.load('./swagger.yaml')

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  app.use(bodyParser.json())
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })
  
  app.use(payload.authenticate)
  app.use(routes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.listen(3001)
}

start()
