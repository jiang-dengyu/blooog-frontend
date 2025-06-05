/*src\pages\PostsPage.jsx*/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostsPage.css';
import bg from '../assets/background_NotesPage.jpg';
const allPosts = [
  { title: "文章標題Post Title 1", content: "This is a brief summary of post 1...", tags: ["React", "Frontend"], author: "Jiang", date: "2024-06-01" },
  { title: "文章標題Post Title 2", content: "This is a brief summary of post 2...", tags: ["Laravel", "Backend"], author: "Jiang", date: "2024-05-31" },
  { title: "文章標題Post Title 3", content: "This is a brief summary of post 3...", tags: ["FastAPI", "Python"], author: "Jiang", date: "2024-05-30" },
  { title: "文章標題Post Title 4", content: "This is a brief summary of post 4...", tags: ["MySQL", "Database"], author: "Jiang", date: "2024-05-29" },
  { title: "文章標題Post Title 5", content: "This is a brief summary of post 5...", tags: ["Docker", "DevOps"], author: "Jiang", date: "2024-05-28" },
  { title: "文章標題Post Title 6", content: "This is a brief summary of post 6...", tags: ["Git", "Version Control"], author: "Jiang", date: "2024-05-27" },
  { title: "文章標題Post Title 7", content: "This is a brief summary of post 7...", tags: ["HTML", "CSS"], author: "Jiang", date: "2024-05-26" },
  { title: "文章標題Post Title 8", content: "This is a brief summary of post 8...", tags: ["JavaScript", "Frontend"], author: "Jiang", date: "2024-05-25" },
];

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIdx, startIdx + postsPerPage);
  return (
    <div className="posts-page" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="posts-wrapper">

        <div className="title-section">
          <h1>Posts Overview</h1>
          <div className="options-container">
            <h3>各種功能</h3>
            <h3>全部文章</h3>
            <h3>最近更新</h3>
            <h3>最新文章</h3>
            <h3>最舊文章</h3>
          </div>
        </div>

        <div className="posts-section">
          {currentPosts.map((post, index) => (
            <Link to={`/posts/${startIdx + index}`} className="post-container-link">
              <div className="post-container" key={index}>
                <div className="article-brief">
                  <p>{post.content}</p>
                </div>
                <div className="article-title">
                  <h2>{post.title}</h2>
                </div>
                <div className="article-tag">
                  {post.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="article-information">
                  <span>Category</span>
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination-section">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div >
    </div >
  );
}

export default Posts; 