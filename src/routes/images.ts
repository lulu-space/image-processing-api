import express, { Request, Response } from 'express'
import resizeImage from '../utilities/resizeImage'
import path from 'path'
import fs from 'fs'

const router = express.Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename as string
  const width = parseInt(req.query.width as string)
  const height = parseInt(req.query.height as string)

  if (!filename || !width || !height) {
    res.status(400).send('Missing parameters')
    return
  }

  if (width <= 0 || height <= 0) {
    res.status(400).send('Invalid width or height')
    return
  }

  const inputPath: string = path.join('images/full', `${filename}.jpg`)
  const outputPath: string = path.join(
    'images/thumb',
    `${filename}_${width}_${height}.jpg`
  )

  if (!fs.existsSync(inputPath)) {
    res.status(404).send('Image not found')
    return
  }

  if (fs.existsSync(outputPath)) {
    res.sendFile(path.resolve(outputPath))
    return
  }

  await resizeImage(inputPath, outputPath, width, height)

  res.sendFile(path.resolve(outputPath))
})

export default router

