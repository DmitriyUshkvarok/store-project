import styled from 'styled-components';
import Link from 'next/link';
import { BsFillGearFill } from 'react-icons/bs';

export const PanelCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #222;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
`;

export const PanelCategoryListItem = styled.li`
  position: relative;
  max-width: 300px;
  border: 2px solid lightgray;
  border-radius: 4px;
`;

export const StyleLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: inherit;

  &.active {
    background-color: lightgrey;
    color: white;
  }
`;

export const StyleBsFillGearFill = styled(BsFillGearFill)`
  position: absolute;
  top: -5px;
  right: -5px;
  color: gray;
`;
