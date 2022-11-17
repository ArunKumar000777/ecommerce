import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow dirrection="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems &&
                    sliderItems.map((item) => {
                        return (
                            <Slide bg={item.bg} key={item.id}>
                                <ImgContainer>
                                    <Image src={item.img} />
                                </ImgContainer>
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Discription>{item.description}</Discription>
                                    <Button>SHOW NOW</Button>
                                </InfoContainer>
                            </Slide>
                        );
                    })}
            </Wrapper>
            <Arrow dirrection="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;

const Container = styled.div`
    /* background-color: red; */
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
    
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(199, 199, 199, 0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.dirrection === "left" && "10px"};
    right: ${(props) => props.dirrection === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    height: 100vh;
    /* background-color: orange; */
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    /* background-color: dodgerblue; */
    /* border: 4px solid black; */
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    /* background-color: red; */
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const Discription = styled.p`
    margin: 30px 0;
    letter-spacing: 1.5px;
    font-weight: 500;
`;
const Button = styled.button`
    padding: 8px 16px;
    background-color: transparent;
    cursor: pointer;
`;
