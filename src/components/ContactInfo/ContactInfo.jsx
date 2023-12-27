'use client';
import {
  Box,
  ConatctBox,
  Title,
  Contacts,
  Firma,
  Address,
  AddressItem,
  AddressLink,
  AddressMailTel,
  NameFirm,
} from './ContactInfo.styled';

const ContactInfo = () => {
  return (
    <ConatctBox>
      <Box>
        <Title>
          <a href={`/home`}>
            <Firma>імбрук</Firma>
          </a>
        </Title>
        <Contacts>
          <p>
            Якщо ви шукаєте найкращі неорганічні пігменти для фарб, бетону чи
            асфальту, обов’язково напишіть або зателефонуйте нам!
          </p>
          <p>
            Замовлення та всі питання надсилайте електронною поштою або
            телефонуйте нам, менеджер проконсультує вас деатально.
          </p>
          <p>
            Повідомляємо, що відділ продажу компанії працює в зручний для вас
            час з понеділка по п&rsquo;ятницю з 10:00 до 20:00.
          </p>

          <Address>
            <NameFirm>ПП &quot;Хімбрук&quot;</NameFirm>

            <ul>
              <AddressItem>
                <AddressLink
                  href="https://maps.app.goo.gl/SWUJe7yLFAhQVuz97"
                  target="_blank"
                >
                  Україна, 79018, м.Львів вул.Шараневича 1/14
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressMailTel href="mailto:pigments@email.ua">
                  pigments@email.ua
                </AddressMailTel>
              </AddressItem>
              <AddressItem>
                <AddressMailTel href="tel:+380962097636">
                  +38 096 209 76 36
                </AddressMailTel>
              </AddressItem>
              <AddressItem>
                <AddressMailTel href="tel:+380505558510">
                  +38 050 555 85 10
                </AddressMailTel>
              </AddressItem>
            </ul>
          </Address>

          <p>Свідоцтво №100051194</p>
          <p>Директор Діокер Петро Омелянович</p>
        </Contacts>
      </Box>
    </ConatctBox>
  );
};

export default ContactInfo;
