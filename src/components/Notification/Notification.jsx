import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export const Notification = ({ text }) => {
  return <StyledNotification>{text}</StyledNotification>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
