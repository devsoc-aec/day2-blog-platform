import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json())

// In-memory storage
let posts = []
let comments = []

// Routes
app.get('/api/data', (req, res) => {
  res.json([])
})

app.get('/api/posts', (req, res) => {
  res.json(posts)
})

app.post('/api/posts', (req, res) => {
  const post = { id: Date.now(), ...req.body, createdAt: new Date().toISOString() }
  posts.push(post)
  res.json(post)
})

app.get('/api/posts/:id/comments', (req, res) => {
  const postComments = comments.filter(c => c.postId === parseInt(req.params.id))
  res.json(postComments)
})

app.post('/api/posts/:id/comments', (req, res) => {
  const comment = { id: Date.now(), postId: parseInt(req.params.id), ...req.body, createdAt: new Date().toISOString() }
  comments.push(comment)
  res.json(comment)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
