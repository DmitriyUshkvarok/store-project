import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 93px;
  background-image: url('/promo-photo.jpg');
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;
  overflow: hidden;

  min-height: 320px;
`;

export const Firma = styled.h1`
  color: #ffd207;
  font-size: 70px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.856);

  position: absolute;
  top: 40px;
  left: 80px;
  z-index: 999999;

  &::before {
    content: '';
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: url('/him.png');
    background-size: cover;
  }
`;
