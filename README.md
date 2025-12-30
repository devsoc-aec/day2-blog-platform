# Blog Platform
Create and share blog posts with a built-in commenting system. Write, publish, and engage with readers.

---

## About the Event
This repository is a part of **OverClocked**, the second and final phase of **OverSquare**, organized by **DevSoc AEC**.
OverClocked focuses on hands-on contribution, collaboration, and improving existing projects
by fixing bugs, adding features, or enhancing developer experience.

---

## Project Overview

**Tech Stack:**
- Frontend: React (Vite)
- Backend: Node.js + Express
- Storage: In-memory (No database)

**Current features:**
- Create blog posts with title, content, and category
- View all published posts
- Read individual post details
- Add comments to posts
- Category-based organization
- Post preview in listing

> ⚠️ Note: This project is intentionally incomplete and may contain bugs or missing features.
Contributors are encouraged to improve and extend it.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/devsoc-aec/day2-blog-platform.git
```

### 2. Install dependencies
**Server**
```bash
cd Server
npm install
npm run dev
```

**Client**
```bash
cd Client
npm install
npm run dev
```

### 3. Access the application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id/comments` - Get comments for a post
- `POST /api/posts/:id/comments` - Add comment to a post

---

## Issues to Work On

### Features
- [ ] Add user authentication
- [ ] Implement post editing and deletion
- [ ] Add rich text editor (markdown support)
- [ ] Create post search functionality
- [ ] Add post tags
- [ ] Implement post likes/reactions
- [ ] Add author profiles
- [ ] Create draft posts feature

### UI/UX
- [ ] Improve post card design
- [ ] Add featured images for posts
- [ ] Create better comment UI
- [ ] Add pagination for posts
- [ ] Implement infinite scroll
- [ ] Add dark mode
- [ ] Create responsive design

### Technical
- [ ] Add input validation
- [ ] Implement error handling
- [ ] Add database integration
- [ ] Create post slug URLs
- [ ] Add SEO optimization
- [ ] Implement rate limiting

---

## How to Contribute
1. Fork this repository
2. Create a new branch (`git checkout -b feature/new-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Add: your feature description"`)
5. Push to your fork (`git push origin feature/your-feature-name`)
6. Open a Pull Request

---

## Contribution Guidelines
- Keep code clean and readable
- Follow existing code style
- Write clear commit messages
- Be respectful and collaborative

---

## Acknowledgements

Built for **OverClocked** by **DevSoc**.
Happy hacking! 💻✨
