const app = require('express')()

app.listen(8000, () => console.log('Server running on port 8000'))

app.get('/', (req, res) => {
  const { query } = req
  res.json({
    name: query.name
  })
})