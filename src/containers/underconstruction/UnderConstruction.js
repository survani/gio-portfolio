import React from 'react';
import { MainContainer, HeaderName, SubText, MainImage } from './style';
import CodeInspection from '../../assets/codeinspection.svg';

const UnderConstruction = () => {
  return (
    <>
      <MainContainer>
        <MainImage src={CodeInspection} alt="Under Construction"></MainImage>
        <div>
          <HeaderName>Website is Currently</HeaderName>
          <SubText> Under Construction</SubText>
        </div>
      </MainContainer>
    </>
  );
};

export default UnderConstruction;
