import styled from 'styled-components';

import Pagination from 'react-bootstrap/Pagination';

export const Box = styled.div`
  overflow: auto;
`;

export const StyledPagination = styled(Pagination)`
  padding-top: 30px;
  li {
    margin: 0 3px;

    a,
    span {
      color: rgb(51, 51, 51);
      padding: 5px 10px;
      border-radius: 5px;

      cursor: pointer;
      color: #000000;

      border: 1px solid;

      &:hover {
        background-color: #e6e6e6;
        opacity: 0.7;
        border: 1px solid #000;
        color: #000000;
      }
    }
  }

  .active span {
    background-color: #007bff;
    color: white;
  }
`;
