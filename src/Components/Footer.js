import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style:none;
  flex: 1;
  display: flex;
  flex-wrap:wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom:10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment = styled.img`
    width:40%;
    height:30px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ARIZ.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available. There
          are many variations of passages of Lorem Ipsum available. There are
          many variations of passages of Lorem Ipsum available.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/>Line Bazar Dharwad, 580001, KA</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/>+91 987 654 3210</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@ariz.com</ContactItem>
          <Payment src="https://www.horusrc.com/media/wysiwyg/pay_by_cards.jpg"/>
      </Right>
    </Container>
  );
};

export default Footer;
