import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const ProductDetailSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: #80808029;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LinkPanel = styled.div`
  padding: 10px;
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

export const ProductDetailInfoBlock = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 4px;

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
`;

export const ProductСharacterization = styled.p`
  color: #222;
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  text-align: center;
  color: black;
  font-weight: bold;
`;

export const ProductWeight = styled.div`
  color: #222;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CategorySpan = styled.span`
  color: lightcoral;
  font-weight: normal;
  margin-left: 10px;
`;

export const ProductBlockLeft = styled.div`
  padding: 20px;
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
  padding: 10px;
`;

export const ProductFullName = styled.p`
  color: #222;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 7px;
`;

export const ProductInfoName = styled.p`
  color: #222;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const ProductName = styled.p`
  color: #222;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const ProductPrice = styled.p`
  color: #222;
  text-transform: uppercase;
  text-align: center;
  font-size: 23px;
`;

export const SpanPrice = styled.span`
  color: gray;
  font-weight: bold;
  margin-left: 5px;
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

export const ProductPackingType = styled.p`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const ProductCountry = styled.div`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const ProductType = styled.p`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const ProductFormula = styled.p`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const ProductDensity = styled.p`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const ProductPdf = styled.div`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;

  @media screen and (max-width: 380px) {
    text-align: center;
  }
`;

export const ProductBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  border-radius: 4px;

  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const CounterAndBtnWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;

  @media screen and (max-width: 1070px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
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
