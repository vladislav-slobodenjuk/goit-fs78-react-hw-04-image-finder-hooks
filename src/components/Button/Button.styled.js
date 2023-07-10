import styled from 'styled-components';

export const StyledButton = styled.div`
  justify-self: center; // !!!

  display: inline-block;
  padding: 8px 16px;
  min-width: 180px;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-align: center;

  color: #fff;
  background-color: #3f51b5;
  border: 0;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
