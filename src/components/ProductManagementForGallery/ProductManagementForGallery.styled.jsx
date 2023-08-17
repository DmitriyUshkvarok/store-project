import styled from 'styled-components';
import Image from 'next/image';

import { Form } from 'formik';

export const GalleryBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Gallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1060px) {
    justify-content: start;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 auto;

  margin-bottom: 20px;
  width: 100%;

  label {
    cursor: pointer;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    height: 42px;
    letter-spacing: 0.1em;
    line-height: 42px;
    text-transform: uppercase;
    border: 1px solid;
    margin-right: 15px;

    &:hover {
      outline: none;
      opacity: 0.7;
    }
  }
`;
export const Input = styled.input`
  display: none;
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
  height: 110px;
  width: 160px;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Btn = styled.button`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 0.1em;
  /* line-height: 42px; */
  text-transform: uppercase;
  border: 1px solid;

  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;
