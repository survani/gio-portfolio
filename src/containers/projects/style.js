import styled from 'styled-components';

export const Header = styled.h2`
  font-size: 24px;
  font-family: Montserrat;
  color: #2b2b2b;
  text-align: center;
  margin-top: 7rem;
  text-transform: uppercase;
`;

export const HeaderContainer = styled.section``;

export const ProjectContainer = styled.section`
  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Project = styled.div`
  background: #3f3d56;
  justify-content: center;
  height: 250px;
  width: 300px;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:nth-child(2) {
    background: #6c63ff;
  }
    &:nth-child(4) {
    background: #6c63ff;
  }
  @media (min-width: 786px) {
    margin: 1rem 1rem;
  }
`;

export const ProjectTitle = styled.a`
  text-decoration: none;
  color: white;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
`;
