import styled from 'styled-components';

export const Overlay = styled.section`
  padding-top: 50px;
  padding-bottom:50px;

  background-image: url('/background-basket-page.jpeg')  ;
  background-repeat: no-repeat;

  background-position: center; 
  background-size: cover; 
    overflow: hidden;
    background-color:  #303030;

`;

export const BoxOffer = styled.div`

width: 1000px;
margin: 0 auto;
`;


export const Title = styled.h2`
  display: flex;
  justify-content: start;
  font-size: 28px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;
export const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 100px;


`

export const Item = styled.li`
display: block;
background: red;
width: 250px;
height: 188px;
border: 1px solid black;
`


export const Box = styled.div`
display: flex;
gap: 20px;
justify-content: center;


`;


// === BoxCompany ===

export const BoxCompany = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
    background: #fff none repeat scroll 0 0;
    width: 490px;
    padding: 30px;
    padding-left: 200px;
    box-sizing: border-box;

`;

export const Subject = styled.h2`
border-bottom: 4px solid #B2B2B2;
    color: #131313;
    font-family: gotham;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.025em;
    line-height: 58px;
    margin-bottom: 27px;
    padding-bottom: 5px;

`;
export const Text = styled.p`
color: #666666;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 11px;
    text-align: justify;

`;

export const Btn = styled.button`
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
    width: 173px;
    border: 2px solid


`;


// === BoxAssure ===

export const BoxAssure = styled.div`
box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
    background: #fff none repeat scroll 0 0;
    width: 490px;
    padding: 30px;
    box-sizing: border-box;
background-color: #fff;
`;
export const ListAssure = styled.ul`
    list-style-type: none;
    padding: 20px 0 35px;
`;


export const ItemAssure = styled.li`
 background-image: url('/li.png'); 
 background-repeat: no-repeat;


color: #666666;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 21px;
    min-height: 22px;
    padding-left: 35px;

`;


