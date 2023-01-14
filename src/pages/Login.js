import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { publicRequest } from "../requestMethods";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)),
        url("https://images.pexels.com/photos/4173113/pexels-photo-4173113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            center no-repeat fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    /* filter: brightness(50%); */
`;
const Wrapper = styled.div`
    text-align: center;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 25%;
    ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 13px 25px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 10px 0;
    font-size: 12px;
    letter-spacing: 1.2px;
    text-decoration: none;
    cursor: pointer;
`;
const Error = styled.span`
    color: red;
`;

const Login = () => {
    const dispatch = useDispatch();
    const { isFetching, currentUser } = useSelector((state) => state.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    console.log(currentUser);

    const navigate = useNavigate();
    
    useEffect(() => {
        setError(!error);
    }, [username,password]);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const res = await publicRequest.post("/auth/login", { username, password });
            res.data && navigate("/");
            dispatch(loginSuccess(res.data));
        } catch (error) {
            dispatch(loginFailure());
            setError(error.response.data);

            console.log(error.response.data);
        }

        // login(dispatch, { username, password });
        // if (currentUser) return navigate("/");
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                {isFetching ? (
                    <ColorRing
                        visible={true}
                        height="60"
                        width="60"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
                    />
                ) : null}
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleLogin} disabled={isFetching}>
                        LOGIN
                    </Button>
                    {error ? <Error>{error}</Error> : null}
                    <Link>DONT YOU REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
