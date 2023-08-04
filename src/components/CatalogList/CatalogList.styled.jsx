import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  background: #fff;
  position: relative;
  margin-bottom: 30px;
  display: block;
  color: #000;
  border-radius: 4px;
  transition: box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    color: grey;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;

  background-color: #c0c0c01c;

  @media screen and (min-width: 768px) {
    padding: 40px 62px;
  }

  @media screen and (min-width: 1340px) {
    padding: 40px 143px;
  }
`;

export const WrapNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 60px;
`;

export const CurrentNavDecor = styled.span`
  color: grey;
`;

export const ListCatalog = styled.ul`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  gap: 20px;
  justify-content: center;

  @media screen and (min-width: 430px) {
  }
`;

export const ItemListCatalog = styled.li`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 420px) {
    width: 380px;
  }
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThumbCardImg = styled.div`
  ::before {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 90px;
    top: 10px;
    border: 1px solid #fff;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (min-width: 420px) {
  }
`;

export const WrapContentCard = styled.div`
  width: 100%;
  height: 80px;
  font-size: 15px;
  font-weight: 300;
  position: relative;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const TitleCard = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
`;

export const ProductTitleCard = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const DecorSpanBackLink = styled.span`
  cursor: pointer;
`;

//------------------------------------------
