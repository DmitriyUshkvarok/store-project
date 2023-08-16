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
  padding: 80px 20px;

  overflow: hidden;
  background-color: #80808029;
  @media screen and (min-width: 768px) {
    padding: 70px 30px;
  }

  @media screen and (min-width: 1340px) {
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
  color: #6c757d;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);s
`;

export const ListCatalog = styled.ul`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  gap: 20px;
  justify-content: center;

  @media screen and (min-width: 874px) {
    margin: 0 auto;
    width: 621px;
  }
  @media screen and (min-width: 1000px) {
    width: 944px;
  }
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

  @media screen and (min-width: 874px) {
    &:last-child {
      margin-right: auto;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 160px;

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

export const TitleCard = styled.h3`
  font-size: 28px;
  margin-bottom: 30px;
  color: #222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 33px;

  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
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

//------------------------------------------
