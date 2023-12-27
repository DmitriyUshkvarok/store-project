'use client';

import Container from '../Container/Container';
import {
  Box,
  List,
  Item,
  Text,
  Link,
  Desc,
  Mail,
  Telephone,
  Phone,
  Clock,
} from './ContactBlock.styled';

const ContactBlock = () => {
  return (
    <Box>
      <Container>
        <List>
          <Item>
            <Telephone />
            <div>
              <Text>Подзвоніть нам</Text>
              <Link href="+380505558510">+38 050 555 85 10</Link>
            </div>
          </Item>
          <Item>
            <Phone />
            <div>
              <Text>Viber</Text>
              <Link href="tel:+380962097636">+38 096 209 76 36</Link>
            </div>
          </Item>
          <Item>
            <Mail />
            <div>
              <Text>Напишіть нам</Text>
              <Link href="mailto:pigments@email.ua">pigments@email.ua</Link>
            </div>
          </Item>
          <Item>
            <Clock />
            <div>
              <Text>Години обслуговування</Text>
              <Desc> Пн-Пт з 10:00 до 20:00</Desc>
            </div>
          </Item>
        </List>
      </Container>
    </Box>
  );
};

export default ContactBlock;
