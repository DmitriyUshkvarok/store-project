import styled from 'styled-components';
import Image from 'next/image';

export const GalleryBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  padding-top: 30px;
  border-top: 4px solid gray;

  margin-top: 30px;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 34px;
  margin-bottom: 34px;

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
  transition: transform 0.25s;
  overflow: hidden;
  width: 330px;
  height: 206px;

  &:hover {
    transform: scale(1.05);
  }
`;
