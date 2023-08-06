import styled from 'styled-components';
import { BsTelephoneInbound, BsPhone, BsClock } from 'react-icons/bs';

import { GrMail } from 'react-icons/gr';

export const Mail = styled(GrMail)`
  color: #aaaaaa;
  font-size: 30px;
`;

export const Telephone = styled(BsTelephoneInbound)`
  color: #aaaaaa;
  font-size: 25px;
`;
export const Phone = styled(BsPhone)`
  color: #aaaaaa;
  font-size: 30px;
`;
export const Clock = styled(BsClock)`
  color: #aaaaaa;
  font-size: 30px;
`;

export const Box = styled.div`
  background-color: #e5e5e5;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const List = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    gap: 90px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  color: #6d6d6d;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`;

export const Desc = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
`;
