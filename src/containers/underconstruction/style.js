import styled from 'styled-components';

export const MainContainer = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  top: 200px;
`;

export const HeaderName = styled.h2`
  font-size: 30px;
  font-family: Montserrat;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SubText = styled.p`
  font-size: 18px;
  font-family: Montserrat;
`;

export const MainImage = styled.img`
  width: 280px;
  margin: 0 auto;
  margin-top: 2rem;
`;
