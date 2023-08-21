import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
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
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
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

export const WrapNav = styled.div`
  margin-top: 5px;
`;

export const CurrentNavDecor = styled.span`
  color: #6c757d;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const ListCatalog = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;

  padding-top: 30px;
  border-top: 4px solid gray;

  margin-top: 30px;
`;

export const ItemListCatalog = styled.li`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  @media screen and (min-width: 420px) {
    width: 300px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 160px;
  object-fit: cover;

  object-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (min-width: 420px) {
  }
`;

export const WrapContentCard = styled.div`
  width: 100%;
  height: 64px;
  font-size: 15px;
  font-weight: 300;
  position: relative;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  color: #212529;
`;

export const TitleCard = styled.h1`
  margin-top: 5px;
`;

export const ProductTitleCard = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: #222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  letter-spacing: 3px;
`;

export const DecorSpanBackLink = styled.span`
  cursor: pointer;

  color: #222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
