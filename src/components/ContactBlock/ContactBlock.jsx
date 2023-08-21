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
              <Text>Гаряча лінія</Text>
              <Link href="tel:801003015">801 00 30 15</Link>
            </div>
          </Item>
          <Item>
            <Phone />
            <div>
              <Text>виклик</Text>
              <Link href="tel:509908030">509 90 80 30</Link>
            </div>
          </Item>
          <Item>
            <Mail />
            <div>
              <Text>Напишіть нам</Text>
              <Link href="mailto:biuro@zwukso.pl">biuro@zwukso.pl</Link>
            </div>
          </Item>
          <Item>
            <Clock />
            <div>
              <Text>Години обслуговування</Text>
              <Desc> Пн-Пт з 9:00 до 15:00</Desc>
            </div>
          </Item>
        </List>
      </Container>
    </Box>
  );
};

export default ContactBlock;
