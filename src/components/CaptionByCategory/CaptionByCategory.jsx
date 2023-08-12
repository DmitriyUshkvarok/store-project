'use client';
import { BsPlusCircleDotted } from 'react-icons/bs';

import {
  WrapNavPanelAdmin,
  WrapAddBtn,
  TitleDesc,
} from './CaptionByCategory.styled';

const CaptionByCategory = ({ handleShow }) => {
  return (
    <WrapNavPanelAdmin>
      <WrapAddBtn>
        <TitleDesc>Додати товар</TitleDesc>
        <button type="button" onClick={() => handleShow('add')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </WrapAddBtn>
      <WrapAddBtn>
        <TitleDesc>Додати країну</TitleDesc>
        <button type="button" onClick={() => handleShow('країну')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </WrapAddBtn>
      <WrapAddBtn>
        <TitleDesc>Додати категорію</TitleDesc>
        <button type="button" onClick={() => handleShow('категорію')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </WrapAddBtn>
      <WrapAddBtn>
        <TitleDesc>Додати підкатегорію</TitleDesc>
        <button type="button" onClick={() => handleShow('підкатегорію')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </WrapAddBtn>
      <WrapAddBtn>
        <TitleDesc>Додати колір</TitleDesc>
        <button type="button" onClick={() => handleShow('колір')}>
          <BsPlusCircleDotted size={14} />
        </button>
      </WrapAddBtn>
    </WrapNavPanelAdmin>
  );
};

export default CaptionByCategory;
