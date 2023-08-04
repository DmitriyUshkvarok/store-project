import styled from 'styled-components';
import Image from 'next/image';

export const GalleryBox = styled.div`
  width: 1000px;
  margin: 0 auto;
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

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Picture = styled(Image)`
  object-fit: cover;
`;
