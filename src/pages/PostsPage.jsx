/*src\pages\PostsPage.jsx*/
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
          <div className="post-container">
            <div className="article-brief">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus risus eu dictum vehicula. Vivamus eget elementum arcu. Duis id sagittis est, ut fermentum tortor. In felis elit, placerat ut maximus ac, luctus ut sem. Fusce elementum blandit nisl in.....
              </p>
            </div>
            <div className="article-title">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia.</h2>
            </div>
            <div className="article-tag">
              <span>tag1</span>
              <span>tag2</span>
              <span>tag3</span>
            </div>
            <div className="article-information">
              <span>文章類型</span>
              <span>時間</span>
              <span>作者</span>
            </div>
          </div>
        </div>
        <div className="pagination-section">
          <p>這裡要放分頁器</p>
        </div>

      </div >
    </div >
  );
}
export default Posts; 