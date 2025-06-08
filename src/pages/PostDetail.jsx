/**src\pages\PostDetail.jsx*/
import MarkdownPreview from '@uiw/react-markdown-preview'; //顯示md套件
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PostDetail.css';
import allPosts from '../data/postsData'; // 假文章資料
import articleMd from '../assets/articleSample.md?raw';



function PostDetail() {
  const { id } = useParams(); // id 為 index
  const navigate = useNavigate();
  const post = allPosts[parseInt(id, 10)];

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    if (!post) return;
    setMarkdown(articleMd); // 引入md檔案
  }, [post]);

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
        <MarkdownPreview source={markdown} />
      </div>
    </div>
  );
}

export default PostDetail;
