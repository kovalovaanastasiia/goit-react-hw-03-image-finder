import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({images, toggleModal}) => {

  return (
    <>
      {images.map(item => (
        <li key={item.id}
            onClick={() => {
              toggleModal(item.largeImageURL, item.tags);
            }}
            className={css.GalleryItem}>
          <img
            className={css.ImageGalleryItem}
            loading="lazy"
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))}
    </>

  )
}
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
