import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

  /* margin-right: auto;
  margin-left: auto;
  width: 370px; */
  /* font-size: 20px; */
  /* color: #010101; */

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 1280px; */
  }
`;
