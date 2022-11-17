import { FavoriteBorder, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <Search />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorder />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 290px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    z-index: 5;
    height: 75%;
`;
const Info = styled.div`
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 3px 5px;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        box-shadow: 3px 4px 7px;
    }
`;
