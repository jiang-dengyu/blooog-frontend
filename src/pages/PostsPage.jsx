/*src\pages\PostsPage.jsx*/
import React from 'react';
import '../styles/PostsPage.css';
import bg from '../assets/background_NotesPage.jpg';

function Posts() {
  return (
    <div className="posts-page" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <h1>文章總覽</h1>
      <p>這裡會列出所有文章。</p>
    </div >
  );
}
export default Posts; 