import styled from 'styled-components';

import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import Image from 'next/image';

export const StyleFooter = styled.footer`
  border-bottom: 1px solid #505050;
  overflow: hidden;

  padding-top: 70px;
  background: #242424;
  background-image: url('/him.png');
  background-repeat: no-repeat;
  background-position: center;
`;
export const BoxFooter = styled.div`
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  gap: 40px;
`;
export const Text = styled.p`
  color: #b4b4b4;
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-weight: bold;
  width: 170px;
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 10px;
`;

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemContact = styled.li`
  color: #b4b4b4;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Box = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  width: 250px;
  padding-bottom: 50px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  color: #b4b4b4;
  font-size: 14px;
  letter-spacing: 0.025em;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const BoxAbout = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 0.5px solid #b4b4b4;
  padding: 20px;
  color: #b4b4b4;
  font-size: 11px;
  letter-spacing: 0.025em;
`;
/** */

export const Btn = styled.button`
  /* margin-left: 10px; */
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #b4b4b4;
  font-size: 14px;
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 75px;
  right: 0;
  border: 1px solid #242424;
  border-radius: 5px;
  padding: 10px;
  background-color: #242424;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TeamList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const TeamItem = styled.li`
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledImage = styled(Image)`
  width: 30px;
  height: auto;
`;

export const TeamTitle = styled.h2`
  color: #b4b4b4;
  font-size: 14px;
  line-height: 22px;
  &:hover,
  &:focus {
    color: #fff;
  }
`;
export const TeamSubject = styled.h3`
  color: #b4b4b4;
  font-size: 13px;
  line-height: 22px;
  &:hover,
  &:focus {
    color: #fff;
  }
`;
export const BoxLink = styled.div`
  margin-left: auto;
`;

export const StyleAiOutlineGithub = styled(AiOutlineGithub)`
  &:hover,
  &:focus {
    color: #ffffff;
    scale: calc(1.4);
  }
`;
export const StyleAiFillLinkedin = styled(AiFillLinkedin)`
  &:hover,
  &:focus {
    color: #ffffff;
    scale: calc(1.4);
  }
`;

export const StyleLink = styled.a`
  color: #b4b4b4;
  font-size: 16px;
  line-height: 22px;
  padding: 5px;
`;
