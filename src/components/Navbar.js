import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrap>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search"/>
                        <Search style={{ color:'gray' , fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SHOPPEE</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to={'/cart'}>
                    
                    <MenuItem>
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrap>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})}
`;
const Wrap = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: '10px 0'})}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})}

`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;
const Input = styled.input`
    border: none;
    height: 30px;
    padding-left: 5px;
    ${mobile({width: '50px',height:'25px'})}

`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: '20px'})}

`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: 'center',flex:2})}

`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px',marginLeft:'10px'})}

`;
