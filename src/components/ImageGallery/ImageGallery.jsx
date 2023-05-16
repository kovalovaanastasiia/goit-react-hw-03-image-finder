import PropTypes from 'prop-types';
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export const ImageGallery = ({images, toggleModal}) => {
  return (
    <>
      <ul className={css.Gallery}>
        <ImageGalleryItem toggleModal={toggleModal} images={images}/>
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired
};
