import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalContent } from './Modal.styled';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    // document.body.style.height = '100vh';
    // document.body.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);

    // document.body.style.height = 'unset';
    // document.body.style.overflow = 'unset';
    document.body.removeAttribute('style');
  }

  render() {
    const { img } = this.props;
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContent>
          <img src={img.large} alt={`${img.tags}`} />
        </ModalContent>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.shape({
    large: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
