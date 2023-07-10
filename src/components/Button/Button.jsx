import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onButtonClick }) => {
  return <StyledButton onClick={onButtonClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
