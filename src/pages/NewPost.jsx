/*src\pages\NewPost.jsx*/
import '../styles/NewPost.css';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import bg from '../assets/background_NotesPage.jpg';

function NewPost() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('## Write your post content here');
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
      content,
      date: new Date().toISOString().split('T')[0],
      author: 'Jiang',
    };

    console.log('New post:', newPost); // 未來改後端儲存API
  };
  return (
    <div className="new-post-page" data-color-mode="light" >
      <h1>Create a New Post</h1>

      <form onSubmit={handleSubmit} className="new-post-form">
        <label>Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />

        <label>Category</label>
        <input className="category" type="text" value={category} onChange={e => setCategory(e.target.value)} required />

        <label>Tags</label>
        <input className="tags" type="text" value={tags} onChange={e => setTags(e.target.value)} />

        <label>Content (Markdown)</label>
        <MDEditor className="MDEditor" value={content} onChange={setContent} height={800} />

        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default NewPost;
