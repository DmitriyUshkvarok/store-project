import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

import Slider from 'rc-slider';

export const AboutBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 34px;
  max-width: 1000px;
`;

export const Title = styled.h1`
  padding: 20px 0;
`;

export const Box = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  border-top: 4px solid gray;
  @media screen and (max-width: 710px) {
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (min-width: 1000px) {
    justify-content: start;
  }
`;

export const BoxFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  @media screen and (max-width: 710px) {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
`;
export const TitleF = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  margin-bottom: 5px;
`;
export const TitleFilter = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: #222;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  min-width: 150px;
  padding: 5px;
  border: 1px solid #000;
  font-size: 14px;
  appearance: none;
  outline: none;
  cursor: pointer;
`;
export const Chip = styled.span`
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StyledSlider = styled(Slider)`
  .rc-slider-rail {
    background: white;
    border: 1px solid #aaaaaa;
    height: 6px;
  }

  .rc-slider-track {
    background: #aaaaaa;
    height: 6px;
  }

  .rc-slider-handle {
    border: 2px solid #aaaaaa;
    background: white;
    height: 15px;
    &:hover,
    &:focus {
      border: 2px solid #8f8d8d;
      border-color: #8f8d8d;
    }
  }
  && .rc-slider-handle-dragging {
    border-color: #8f8d8d !important;
    box-shadow: 0 0 0 5px #8f8d8d !important;
  }
`;

// ================   ProductsList
export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 20px;

  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  @media screen and (min-width: 1000px) {
    justify-content: start;
    width: 1000px;
  }
`;
export const Overlay = styled.div`
  display: inline-block;
  position: absolute;
  content: '';

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 4px 4px 0 0;
  padding: 10px;
  opacity: 0.8;
  background-color: #333333;
  overflow: auto;
  transform: translateY(101%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TextOverlay = styled.p`
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.025em;
  line-height: 18px;
`;

export const PictureOverlay = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Item = styled.li`
  width: 230px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 4px;

  transition: transform 0.25s;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
  }
  &:hover ${Overlay} {
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const BoxTitle = styled.div`
  padding: 10px;
`;
export const TitleProduct = styled.h3`
  color: #131313;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 20px;
  margin-bottom: 13px;
`;

export const Price = styled.p`
  color: #131313;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 20px;
  margin-bottom: 13px;
`;

export const Picture = styled(Image)`
  object-fit: cover;
  overflow: hidden;
  width: 100%;

  height: 160px;
  border-radius: 6px 6px 0 0;
`;

export const Btn = styled.button`
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 700px) {
    width: 350px;
  }
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: gotham;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  letter-spacing: 6px;
  line-height: 42px;
  padding-left: 20px;
  text-transform: uppercase;

  border: 2px solid;

  margin: 0 auto;
  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;
// =====================
export const ProductDetailSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: #80808029;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LinkPanel = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyleLinkDetail = styled(Link)`
  color: #222;
  font-weight: bold;
  text-decoration: underline;
`;

export const CurrentLink = styled.span`
  color: gray;
`;

export const ProductDetailInfoBlock = styled.ul`
  display: flex;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ProductСharacterization = styled.p`
  color: #222;
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  text-align: start;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductWeight = styled.div`
  color: #222;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductPackingType = styled.p`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const CategorySpan = styled.span`
  color: lightcoral;
  font-weight: normal;
  margin-left: 10px;
`;

export const ProductBlockLeft = styled.li`
  padding: 20px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const ProductName = styled.p`
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const ProductPrice = styled.p`
  margin-top: 10px;
  color: #222;
  text-transform: uppercase;
  text-align: center;
`;

export const SpanPrice = styled.span`
  color: gray;
`;

export const ProductBrand = styled.p`
  color: #222;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductColor = styled.p`
  color: #222;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.7);
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 100px;
  padding: 5px;
  margin-top: auto;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnIncrement = styled.button`
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #222;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(2);
  }
`;

export const InputCounter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  color: #222;
  width: 100%;
  outline: none;
  appearance: none;

  border: none;
  text-align: center;
`;

export const BtnDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #222;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.7);
  }
`;

export const OrderBtnDetails = styled.button`
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  color: lightgreen;
  text-transform: uppercase;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  transition: 0.4s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: green;
  }
`;

export const SetFilterBtn = styled.button`
  cursor: pointer;
  color: #000000;

  gap: 20px;
  font-family: gotham;
  font-size: 12px;
  font-weight: bold;
  height: 42px;

  line-height: 42px;
  text-transform: uppercase;
  max-width: 150px;
  border: 2px solid;

  &:hover {
    outline: none;
    opacity: 0.7;
  }
`;
