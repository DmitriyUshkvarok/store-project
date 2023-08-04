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
  margin-top: 34px;
  margin-bottom: 34px;
`;

export const PageNumber = styled.span`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 800;
`;

export const Picture = styled(Image)`
  object-fit: cover;
`;
