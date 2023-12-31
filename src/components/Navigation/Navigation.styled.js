import styled from 'styled-components';
import Link from 'next/link';

export const StyleNavigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyleLink = styled(Link)`
  display: inherit;

  @media screen and (max-width: 1000px) {
    display: none;
  }
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 53px;
  padding: 0 21px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }

  &.active {
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
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

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
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const ItemForBurger = styled.li`
  color: #b1b1b1;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 2px solid #46464647;
  text-transform: lowercase;
  line-height: 19px;
  letter-spacing: 0.4px;

  &:hover,
  &:focus {
    background-color: #e3010f;
    color: white;
  }
`;

export const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #242424;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 111111;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: #242424;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }

  &:hover ${DropDownMenu} {
    display: block;
  }

  &.active {
    background-color: #e3010f;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  padding: 15px;
  @media screen and (max-width: 1000px) {
    display: block;
    position: relative;
    display: inline-block;
  }
`;

export const StyleLinkForBurger = styled(Link)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 23px;
  padding: 15px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  &.active,
  &:hover,
  &:focus {
    background-color: #e3010f;
  }
`;

export const ListMenu = styled.ul`
  background-color: #6f6f6f;
  padding-left: 30px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  line-height: 33px;
  padding: 0 21px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    background-color: #e3010f;
  }
`;

export const LinkForB = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
`;

export const DropdownForBurger = styled.div`
  display: flex;

  justify-content: center;
  visibility: ${(props) => (props.togle ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.togle ? 1 : 0)};
  transform: translateY(${(props) => (props.menuVisible ? '0' : '-10px')});
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;
  z-index: 1111122;
  top: 63px;
  left: 0;
  align-items: flex-start;
`;

export const MenuBurger = styled.ul`
  background-color: #242424;
  box-shadow: 18px 20px 24px 7px rgb(59 47 47 / 80%);
  width: 320px;
  margin: 0;
  padding: 0;
`;
