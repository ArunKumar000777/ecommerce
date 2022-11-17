import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Discription>Get timely updates from your favorite products.</Discription>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 25px;
    ${mobile({fontSize: '50px',marginBottom:'18px'})}

`
const Discription = styled.p`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1.3px;
    margin-bottom: 25px;
    ${mobile({fontSize: '16px',textAlign: 'center'})}

`
const InputContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: '80%',
})}

`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;

`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`