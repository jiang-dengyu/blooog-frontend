/**src\pages\PostDetail.jsx*/
import '../styles/PostDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import allPosts from '../data/postsData'; // 將文章資料抽出共用
import bg from '../assets/background_NotesPage.jpg';


function PostDetail() {
  const { id } = useParams(); // id 為 index 或唯一 slug
  const navigate = useNavigate();
  const post = allPosts[parseInt(id, 10)];

  if (!post) return <div>找不到文章</div>;

  return (
    <div className="post-detail" >
      <h1>{post.title}</h1>
      <div className="meta-row">
        <span className="category">Category</span>
        <span className="date">{post.date}</span>
        <span className="tags">{post.tags.join(', ')}</span>
        <button onClick={() => navigate(-1)}>返回</button>
      </div>
      <div className="content">
        <p>{post.content}</p>
        {/* 未來支援 markdown 可轉換此段 */}
      </div>
    </div>
  );
}

export default PostDetail;
