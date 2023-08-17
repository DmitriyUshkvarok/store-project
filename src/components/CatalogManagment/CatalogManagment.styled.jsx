import styled from 'styled-components';

import Pagination from 'react-bootstrap/Pagination';

export const StyledPagination = styled(Pagination)`
  // ваші стилі тут
  /* background-color: #f3f3f3; */

  li {
    // стилі для елементів списку
    margin: 0 3px;

    a,
    span {
      // стилі для посилань та спанів в елементах списку
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
