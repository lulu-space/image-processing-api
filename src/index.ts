import express from 'express'
import routes from './routes/images'

const app = express()
const port = 3000

app.use('/api/images', routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app
