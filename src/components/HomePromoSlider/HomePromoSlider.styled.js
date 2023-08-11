import styled from 'styled-components';

import Image from 'next/image';

export const Section = styled.section`
  @media screen and (min-width: 320px) {
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
export const BoxTitle = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    width: 300px;
    margin: 0 auto;
    height: 90%;
    align-items: flex-end;
  }
  @media screen and (min-width: 520px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 1000px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #ffffff;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.8;
  background-color: #333333;
`;
