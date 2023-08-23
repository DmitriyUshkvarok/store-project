import styled from 'styled-components';

export const AboutBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 34px;
  min-height: calc(100vh - 928px);
`;

export const Title = styled.h1`
  margin-top: 30px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;

export const About = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  text-align: justify;
  padding-top: 30px;
  border-top: 4px solid gray;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  color: rgb(138, 138, 138);
  margin-top: 30px;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;
