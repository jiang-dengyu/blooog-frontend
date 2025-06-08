/*src/pages/Gallery.jsx*/
import { useState } from 'react';
import '../styles/Gallery.css';

const imageModules = import.meta.glob('../assets/gallery/*.jpg', {
  eager: true, // 立即載入，不用 async
  import: 'default', // 取得 default export（圖片路徑）
});
const imageUrls = Object.values(imageModules).sort();

function Gallery() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'
  const [mainImage, setMainImage] = useState(null);

  const handleThumbnailClick = (url) => {
    setMainImage(url);
    setViewMode('detail');
  };

  const handleTitleClick = () => {
    setViewMode('grid');
    setMainImage(null);
  };

  return (
    <div className="gallery-section">
      <div className="gallery-title" onClick={handleTitleClick}>
        <h1>Gallery</h1>
      </div>

      {viewMode === 'grid' ? (
        <div className="gallery-grid">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`grid-${index}`}
              className="grid-img"
              onClick={() => handleThumbnailClick(url)}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="gallery-photo">
            <img src={mainImage} alt="Main" className="main-img" />
          </div>
          <div className="gallery-pagination">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`thumb-${index}`}
                className={`thumb-img ${mainImage === url ? 'active' : ''}`}
                onClick={() => setMainImage(url)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default Gallery;