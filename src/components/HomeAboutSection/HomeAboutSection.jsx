'use client';

import Container from "../Container/Container";
import {BoxOffer , Box, Item, List, Overlay, Title , BoxCompany,Subject,Text, BoxAssure, ListAssure, ItemAssure, Btn} from "./HomeAboutSection.styled"
import { BsArrowRight } from "react-icons/bs";


const HomeAboutSection = ()=>
{
    return (
        <Overlay>
                <Container>
<BoxOffer>
<Title>Пропозиція</Title>
<List>
    <Item> пігменти порошок</Item>
    <Item> картинка </Item>
    <Item>  картинка</Item>
    <Item>пігменти рідина</Item>
    <Item>пігменти порошок</Item>
    <Item>картинка </Item>
    <Item>еко рідина </Item>
    <Item>картинка </Item>
</List>
</BoxOffer>
<Box>
<BoxCompany><Subject>Про компанію</Subject>
<Text><strong> ZWUKSO Sp. z o. o. Sp.k. </strong> на ринку з 1989 року.
Ми є провідною компанією, яка займається виробництвом, імпортом та дистрибуцією кольорових неорганічних пігментів у Польщі.
Наша комерційна пропозиція включає широкий спектр кольорів найякісніших порошкових, рідких, гранульованих і мікронізованих пігментів - переважно з Європейського Союзу. Крім того, ми виробляємо екологічні пігменти за допомогою процесу фотокаталізу.
</Text>
 <Btn>
 більше <BsArrowRight size='20px'/>
    {/*  переносить на сторінку про нас  */}
 </Btn>
</BoxCompany>
<BoxAssure><Subject>Запевняємо</Subject>

<ListAssure>
    <ItemAssure> найбільша кольорова палітра синтетичних неорганічних пігментів у Польщі</ItemAssure>
    <ItemAssure>професійне та доброзичливе обслуговування
</ItemAssure>
    <ItemAssure>привабливі ціни та висока якість
</ItemAssure>
    <ItemAssure>швидке виконання замовлення
</ItemAssure>
    <ItemAssure>використовувати для виробництва зеленої енергії з фотоелектричних панелей</ItemAssure>
</ListAssure>
<Btn>
 більше <BsArrowRight size='20px'/>
    {/*  переносить на сторінку Запевняємо */}
 </Btn>
</BoxAssure>
</Box>
</Container>
        </Overlay>
    )
}
export default HomeAboutSection