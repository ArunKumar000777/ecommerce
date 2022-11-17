import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: white;
`;

const Button = styled.button`
    padding: 10px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    background-color: white;
    color: gray;
    font-weight: 600;
`;
