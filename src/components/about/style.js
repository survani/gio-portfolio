import styled from "styled-components";
import { Link } from "react-router-dom";

export const IntroSec = styled.section`
  height: 750px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 86px;
    margin-bottom: 10rem;
  }
`;

export const IntroText = styled.h2`
  text-align: center;
  font-size: 25px;
  font-family: Montserrat;
  text-transform: uppercase;
  font-weight: 900;
  @media (min-width: 768px) {
    font-size: 86px;
  }
`;

export const IntroText2 = styled.h2`
  text-align: center;
  font-size: 14px;
  font-family: Montserrat;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutSec = styled.section`
  margin-bottom: 15rem;
`;

export const AboutTitle = styled.h2`
  font-size: 60px;
  text-align: center;
  font-family: Montserrat;
`;

export const SubText = styled.p`
  font-size: 20px;
  text-align: center;
  font-family: Montserrat;
`;

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 200;
  font-family: Montserrat;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
`;

export const Links = styled(Link)`
  font-size: 20px;
  text-align: center;
  font-weight: 200;
  font-family: Montserrat;
  text-decoration: none;
`;
