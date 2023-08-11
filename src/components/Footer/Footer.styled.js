import styled from 'styled-components';

export const StyleFooter = styled.footer`
  border-bottom: 1px solid #505050;
  overflow: hidden;

  padding-top: 70px;
  background: #242424;
  background-image: url('/him.png');
  background-repeat: no-repeat;
  background-position: center;
`;
export const BoxFooter = styled.div`
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  gap: 40px;
`;
export const Text = styled.p`
  color: #b4b4b4;
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-weight: bold;
  width: 170px;
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 10px;
`;

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemContact = styled.li`
  color: #b4b4b4;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Box = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  width: 250px;
  padding-bottom: 50px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  color: #b4b4b4;
  font-size: 14px;
  letter-spacing: 0.025em;
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const BoxAbout = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 0.5px solid #b4b4b4;
  padding: 20px;
  color: #b4b4b4;
  font-size: 11px;
  letter-spacing: 0.025em;
`;
