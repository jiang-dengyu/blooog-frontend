/*src\pages\PostsPage.jsx*/
import { useState } from 'react';
import '../styles/PostsPage.css';
import bg from '../assets/background_NotesPage.jpg';
const allPosts = [
  { title: "文章1標題", content: "內容簡述1...", tags: ["React", "前端"], author: "Jiang", date: "2024-06-01" },
  { title: "文章2標題", content: "內容簡述2...", tags: ["Laravel", "後端"], author: "Jiang", date: "2024-05-31" },
  { title: "文章3標題", content: "內容簡述3...", tags: ["FastAPI", "Python"], author: "Jiang", date: "2024-05-30" },
  { title: "文章4標題", content: "內容簡述4...", tags: ["MySQL", "資料庫"], author: "Jiang", date: "2024-05-29" },
  { title: "文章5標題", content: "內容簡述5...", tags: ["Docker", "DevOps"], author: "Jiang", date: "2024-05-28" },
  { title: "文章6標題", content: "內容簡述6...", tags: ["Git", "版本控制"], author: "Jiang", date: "2024-05-27" },
  { title: "文章7標題", content: "內容簡述7...", tags: ["HTML", "CSS"], author: "Jiang", date: "2024-05-26" },
  { title: "文章8標題", content: "內容簡述8...", tags: ["JavaScript", "前端"], author: "Jiang", date: "2024-05-25" },
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
          <h1>文章總覽</h1>
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
                <span>技術類</span>
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
            </div>
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