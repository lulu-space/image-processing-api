* API Endpoint
The API endpoint can be accessed at:
http://localhost:3000/api/images

* Query Parameters:
- filename (string): name of the image (without extension)
- width (number): desired image width
- height (number): desired image height

* Example Request:
http://localhost:3000/api/images?filename=fjord&width=200&height=200

* Expected Behavior:
- Returns a resized image
- Saves resized image to images/thumb folder (caching)
- Returns errors for invalid inputs

* Available Scripts:
- npm run build → Compile TypeScript
- npm start → Start server
- npm test → Run tests
- npm run lint → Run ESLint
- npm run format → Format code

