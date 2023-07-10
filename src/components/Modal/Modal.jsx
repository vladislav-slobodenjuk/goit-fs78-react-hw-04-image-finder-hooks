import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled';

export const Modal = ({ img, onCloseModal }) => {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // document.body.style.height = '100vh';
    // document.body.style.overflowY = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // document.body.style.height = 'unset';
      // document.body.style.overflow = 'unset';
      // document.body.removeAttribute('style');
    };
  }, [onCloseModal]);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);

  //   // document.body.style.height = '100vh';
  //   // document.body.style.overflowY = 'hidden';
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);

  //   // document.body.style.height = 'unset';
  //   // document.body.style.overflow = 'unset';
  //   document.body.removeAttribute('style');
  // }

  // const { img } = this.props;
  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        <img src={img.large} alt={`${img.tags}`} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  img: PropTypes.shape({
    large: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
