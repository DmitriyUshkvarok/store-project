import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const ProductDetailSection = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkPanel = styled.div`
  margin-top: 30px;
`;

export const Product = styled.div`
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

export const StyleLinkDetail = styled(Link)`
  color: #222;
  font-weight: bold;
  text-decoration: underline;
`;

export const CurrentLink = styled.span`
  color: gray;
`;

export const ProductDetailInfoBlock = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  margin-bottom: 20px;
  gap: 30px;

  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const StyleImage = styled(Image)`
  margin-bottom: 10px;
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export const ProductСharacterization = styled.p`
  color: #222;
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  text-align: justify;
`;

export const ProductWeight = styled.div`
  color: #222;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const CategorySpan = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
`;

export const CategorySpanPdf = styled.span`
  font-size: 15px;
  font-weight: 300;
  margin-left: 5px;
`;

export const ProductBlockLeft = styled.div`
  width: 50%;
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
  margin-bottom: 20px;
`;

export const ProductFullName = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const ProductInfoName = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const ProductName = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
`;

export const ProductPrice = styled.p`
  color: #222;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  border-top: 1px solid grey;
  padding-top: 10px;
`;

export const SpanPrice = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
`;

export const ProductBrand = styled.p`
  color: #222;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ProductColor = styled.p`
  color: #222;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ProductPackingType = styled.p`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductCountry = styled.div`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductType = styled.p`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductFormula = styled.p`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductDensity = styled.p`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductPdf = styled.div`
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;

export const ProductBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const Boxer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const CounterAndBtnWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  max-width: 150px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const BtnIncrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  border: none;
  background-color: transparent;
  color: #222;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const InputCounter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  background-color: transparent;
  color: #222;
  width: 100%;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  text-align: center;
`;

export const BtnDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  border: none;
  background-color: transparent;
  color: #222;
  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.5);
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
