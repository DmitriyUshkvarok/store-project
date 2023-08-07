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
                  href="https://goo.gl/maps/zSzGXAno3n1fgtpi9"
                  target="_blank"
                >
                  Україна 79000, м. Львів, пл. Ринок, 1
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressMailTel href="mailto:info@devstudio.com">
                  don-pedro@gmail.com
                </AddressMailTel>
              </AddressItem>
              <AddressItem>
                <AddressMailTel href="tel:+380961111111">
                  +38 096 777 77 77
                </AddressMailTel>
              </AddressItem>
            </ul>
          </Address>

          <p>IBAN: UA26003301007668</p>
          <p>МФО: 385316 в АТ «Сенс-Банк»</p>
          <p>ЄДРПОУ: 35227281</p>
          <p>Директор Діокер Петро Омелянович</p>
        </Contacts>
      </Box>
    </ConatctBox>
  );
};

export default ContactInfo;
