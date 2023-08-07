import styled from 'styled-components';

export const ConatctBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 34px;
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

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
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

export const Firma = styled.span`
  transition: transform 0.45s;

  color: #000000;
  font-size: 32px;

  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url('/him.png');
    background-size: cover;
  }

  &:hover {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const Address = styled.address`
  font-style: normal;
  line-height: 1.71;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export const NameFirm = styled.p`
  display: inline-block;
  margin-bottom: 20px;
  border-bottom: 2px solid grey;
  font-weight: 500;
`;

export const AddressItem = styled.li`
  margin-bottom: 8px;
`;

export const AddressLink = styled.a`
  color: rgb(83, 83, 83);
  padding: 0;
  font-weight: 500;
`;

export const AddressMailTel = styled.a`
  color: rgb(34, 147, 205);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fe0000;
  }
`;
