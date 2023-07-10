import PropTypes from 'prop-types';
import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, tags, large, onImgClick }) => {
  return (
    <Item onClick={() => onImgClick({ large, tags })}>
      <Img src={src} alt={`${tags}`} loading="lazy" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
