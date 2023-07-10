import { RotatingLines } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <RotatingLines
        strokeColor="#fff"
        strokeWidth="4"
        animationDuration="1.3"
        width="150"
        visible={true}
      />
    </Overlay>
  );
};
