import resizeImage from '../utilities/resizeImage'
import fs from 'fs'

describe('Image Processing Function', () => {
  it('resizes image successfully', async () => {
    const output = 'images/thumb/test_100_100.jpg'

    await resizeImage(
      'images/full/fjord.jpg',
      output,
      100,
      100
    )

    expect(fs.existsSync(output)).toBeTrue()
  })
})
