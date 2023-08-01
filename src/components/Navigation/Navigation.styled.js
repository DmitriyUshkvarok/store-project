import styled from 'styled-components';
import Link from 'next/link';

export const StyleNavigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyleLink = styled(Link)`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 53px;

  &.active {
    color: #ff0000;
  }
`;
