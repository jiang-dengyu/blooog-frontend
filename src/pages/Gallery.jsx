/*src/pages/Gallery.jsx*/
import {useState} from 'react';
import '../styles/Gallery.css';

const imageUrls = [
  'https://picsum.photos/id/1018/800/500',
  'https://picsum.photos/id/1025/800/500',
  'https://picsum.photos/id/1035/800/500',
  'https://picsum.photos/id/1050/800/500',
  'https://picsum.photos/id/153/800/500',
  'https://picsum.photos/id/1074/800/500',
  'https://picsum.photos/id/1084/800/500',
  'https://picsum.photos/id/109/800/500',
  'https://picsum.photos/id/110/800/500',
];

function Gallery(){
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
            ): (
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