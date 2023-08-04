import styled from 'styled-components';
import Image from 'next/image';

export const GalleryBox = styled.div`
  /* width: 1000px; */
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 34px;
  margin-bottom: 34px;

  /* Медіа-правило для екранів шириною 700px і більше */
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const PageNumber = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 800;

  @media screen and (min-width: 700px) {
    margin: 0 15px 0 15px;
  }
`;

export const Picture = styled(Image)`
  object-fit: cover;
`;
