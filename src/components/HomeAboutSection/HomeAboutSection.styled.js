import styled from 'styled-components';
import Link from 'next/link';

import Image from 'next/image';

export const SwiperImage = styled(Image)`
  width: 250px;
  height: 100%;
`;

export const Overlay = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  background-image: url('/background-basket-page.jpeg');
  background-repeat: no-repeat;

  background-position: center;
  background-size: cover;
  overflow: hidden;
  background-color: #303030;
`;

export const BoxOffer = styled.div`
  @media screen and (min-width: 320px) {
    width: 320px;
    margin: 0 auto;
  }
  @media screen and (min-width: 520px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 1000px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: start;
  font-size: 28px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const Item = styled.li`
  width: 250px;
  height: 188px;
  border: 1px solid black;
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  text-transform: uppercase;
  letter-spacing: 0.25em;

  &:nth-child(1) {
    background: red;
  }
  &:nth-child(3) {
    background: #188ae8;
  }
  &:nth-child(6) {
    background: #c336b7;
  }
  &:nth-child(8) {
    background: #29a936;
  }
`;
export const Chip = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.025em;
`;

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 115px;
  cursor: pointer;
`;

export const Box = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: initial;
    align-items: stretch;
  }
`;

// === BoxCompany ===

export const BoxCompany = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    background-color: #fff;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.75);
    background: #fff none repeat scroll 0 0;

    box-sizing: border-box;
    width: 90%;
    max-width: 490px;
    padding: 30px;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) {
    width: 490px;
    padding-left: 200px;
  }
`;

export const Salamander = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    bottom: -18px;
    left: -190px;
  }
`;

export const Subject = styled.h2`
  border-bottom: 4px solid #b2b2b2;
  color: #131313;

  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 58px;
  margin-bottom: 27px;
  padding-bottom: 5px;
`;
export const Text = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 11px;
  text-align: justify;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 20px;

  color: #000000;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 6px;
  line-height: 42px;
  padding-left: 20px;
  text-transform: uppercase;
  width: 173px;
  border: 2px solid black;
`;

// === BoxAssure ===

export const BoxAssure = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.75);
    background: #fff none repeat scroll 0 0;
    width: 90%;
    max-width: 490px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) {
    width: 490px;
  }
`;

export const Pigments = styled.div`
  @media screen and (min-width: 320px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 125px;
  }
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`;

export const ListAssure = styled.ul`
  list-style-type: none;
  padding: 20px 0 35px;
`;

export const ItemAssure = styled.li`
  background-image: url('/li.png');
  background-repeat: no-repeat;
  color: #666666;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 21px;
  min-height: 22px;
  padding-left: 35px;
`;
