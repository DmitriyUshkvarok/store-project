import styled, { keyframes } from 'styled-components';

export const Box = styled.div`
  /* margin-top: 93px; */
  background-image: url('/promo-photo.jpg');
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;
  overflow: hidden;

  min-height: 200px;

  @media screen and (min-width: 520px) {
    min-height: 320px;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

export const Firma = styled.h1`
  transition: transform 0.45s;
  @media screen and (min-width: 610px) {
    font-size: 70px;
    margin-left: 120px;
  }
  color: #fdfdfd;
  font-size: 40px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.856);

  &::before {
    content: '';
    display: inline-block;
    margin-left: 80px;
    width: 120px;
    height: 120px;
    background-image: url('/him.png');
    background-size: cover;
  }

  &:hover {
    animation: ${pulseAnimation} 0.99s infinite;
  }
`;
