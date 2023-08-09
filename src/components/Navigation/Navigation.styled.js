import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const StyleNavigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyleLink = styled(Link)`
  /* display: none; */

  @media (0px <= width <= 960px) {
    display: none;
  }
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 53px;
  padding: 0 21px;

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const BasketStyleLink = styled(Link)`
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  min-height: 53px;
  padding: 0 21px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 111111;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDownMenu} {
    display: block;
  }
`;

export const DropdownForBurger = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1111122;
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (width < 960px) {
    display: block;
    position: relative;
    display: inline-block;

    &:hover ${DropdownForBurger} {
      display: block;
    }
  }
`;

export const StyleLinkForBurger = styled(Link)`
  display: none;

  @media (width < 960px) {
    display: block;
  }
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 53px;
  padding: 0 21px;

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const DropDownMenuForBurger = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1111122;
`;

export const DropdownForOferta = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDownMenuForBurger} {
    display: block;
  }
`;
