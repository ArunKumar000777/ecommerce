import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    ${mobile({ width: "75%" })}
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
    margin: 20px 10px 0 10px;
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
const defaultFormFields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
    const userRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await publicRequest.post("auth/register", { username, password, email });
            res?.data && navigate("/login");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleRegister}>
                    <Input placeholder="name" onChange={handleChange} name="name" ref={userRef} />
                    <Input placeholder="last name" onChange={handleChange} name="lastname" />
                    <Input placeholder="username" onChange={handleChange} name="username" value={username} />
                    <Input placeholder="email" onChange={handleChange} name="email" value={email} />
                    <Input
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                        name="password"
                        value={password}
                    />
                    <Input
                        type="password"
                        placeholder="confirm password"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
