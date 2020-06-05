import React from 'react';
import Avatar from '../../assets/avatar.jpg';
import ZigZag from '../../assets/zigzag.png';

import { Image, SmallText, Arrow } from '../introduction/style';
const Introduction = () => {
  return (
    <>
      <Image src={Avatar} alt="Avatar"></Image>
      <SmallText>Full Stack Developer </SmallText>
      <Arrow src={ZigZag} alt="Arrow"></Arrow>
    </>
  );
};

export default Introduction;
