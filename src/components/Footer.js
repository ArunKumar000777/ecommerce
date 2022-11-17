import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOPPEE</Logo>
                <Disc>
                    There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus eligendi beatae repudiandae consequatur neque repellat magnam, consectetur amet, temporibus
                    nemo eos aut quas asperiores esse! Deleniti nostrum aspernatur vel ratione
                </Disc>
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
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <RightTitle>Contact</RightTitle>
                <ContactItem>
                    {" "}
                    <Room style={{ marginRight: "10px" }} /> 630250 kannur ,kerala
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> 325025412
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> jgiojsd@gamil.com
                </ContactItem>
                <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2GOLDQrc2NxAzT6qt14C2-w9x41abSygDg&usqp=CAU" />
            </Right>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}

`;
const Left = styled.div`
    flex: 1;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

     
`;
const Logo = styled.h1``;
const Disc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}

`;
const Title = styled.h3`
    margin-bottom: 35px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#fcf5f5'  })}

`;
const RightTitle = styled.h1`
    margin-bottom: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;
const Payment = styled.img`
    width: 50%;
`;
