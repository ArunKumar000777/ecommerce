import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url("https://images.pexels.com/photos/5868119/pexels-photo-5868119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    text-align: center;
    background-color: white;
    padding: 20px;
    width: 40%;
    ${mobile({width: '75%'})}

`;
const Title = styled.h1`
font-weight: 300;
`;
const Form = styled.form`
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 10px ;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin-top: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 13px 25px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
