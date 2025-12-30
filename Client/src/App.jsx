import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: '', content: '', category: '' })
  const [selectedPost, setSelectedPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts').then(res => res.json())
      setPosts(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`).then(res => res.json())
      setComments(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const createPost = async (e) => {
    e.preventDefault()
    if (!newPost.title.trim() || !newPost.content.trim()) return
    try {
      await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newPost) }).then(res => res.json())
      setNewPost({ title: '', content: '', category: '' })
      fetchPosts()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const viewPost = (post) => {
    setSelectedPost(post)
    fetchComments(post.id)
  }

  const addComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    try {
      await axios.post(`/api/posts/${selectedPost.id}/comments`, {
        author: 'Anonymous',
        content: newComment
      })
      setNewComment('')
      fetchComments(selectedPost.id)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (selectedPost) {
    return (
      <div className="container">
        <button onClick={() => setSelectedPost(null)} style={{ marginBottom: '20px' }}>
          ← Back to Posts
        </button>

        <div className="card">
          <h1>{selectedPost.title}</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            {selectedPost.category && `Category: ${selectedPost.category} • `}
            {new Date(selectedPost.createdAt).toLocaleDateString()}
          </p>
          <div style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
            {selectedPost.content}
          </div>
        </div>

        <div className="card">
          <h3>Comments ({comments.length})</h3>
          <form onSubmit={addComment} style={{ marginBottom: '20px' }}>
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows="3"
            />
            <button type="submit">Post Comment</button>
          </form>
          {comments.map(comment => (
            <div key={comment.id} style={{ padding: '15px', background: '#f8f9fa', borderRadius: '8px', marginBottom: '10px' }}>
              <strong>{comment.author}</strong>
              <p style={{ margin: '10px 0 0 0' }}>{comment.content}</p>
              <small style={{ color: '#666' }}>{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>📰 Blog Platform</h1>

      <div className="card">
        <h2>Create New Post</h2>
        <form onSubmit={createPost}>
          <input
            type="text"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category (optional)"
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          />
          <textarea
            placeholder="Post Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            rows="6"
          />
          <button type="submit">Publish Post</button>
        </form>
      </div>

      <div className="card">
        <h2>Recent Posts ({posts.length})</h2>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No posts yet. Create one above!</p>
        ) : (
          posts.map(post => (
            <div
              key={post.id}
              className="card"
              style={{ margin: '0 0 15px 0', background: '#f8f9fa', cursor: 'pointer' }}
              onClick={() => viewPost(post)}
            >
              <h3>{post.title}</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {post.category && `${post.category} • `}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p style={{ marginTop: '10px' }}>
                {post.content.substring(0, 150)}...
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
