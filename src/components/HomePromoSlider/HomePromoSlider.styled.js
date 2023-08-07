import styled from 'styled-components';
import Link from 'next/link';

import Image from 'next/image';

export const Section = styled.section`
  @media screen and (min-width: 320px) {
    margin-top: 93px;
    height: 315px;
  }

  @media screen and (min-width: 1280px) {
    height: 646px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    height: 315px;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    height: 646px;
  }
`;
// export const ScrollImageFlag = styled(Image)`
//   @media screen and (min-width: 320px) {
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 10px;
//     margin: 0 auto;

//     width: 500px;
//     height: 250px;
//     background-color: #303030;
//     /* object-fit: cover; */
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1000px;
//     height: 400px;
//   }
// `;
// export const TitleFlag = styled.h2`
//   position: absolute;
//   left: 50;
//   bottom: 10px;
//   margin: 0 auto;

//   z-index: 2;
//   font-size: 20px;

//   background-color: #333333;
//   color: #ffffff;
//   font-weight: bold;
//   padding: 10px;
//   text-align: center;
//   text-transform: uppercase;
// `;

export const ScrollImage = styled(Image)`
  @media screen and (min-width: 320px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 315px;
    margin: 0 auto;
    background-color: #303030;
    object-fit: cover;
  }

  @media screen and (min-width: 1280px) {
    height: 646px;
  }
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 35px;
  left: 30px;
  z-index: 2;
  font-size: 20px;

  background-color: #333333;
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
`;
