import { Add, Remove } from "@material-ui/icons";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announsment from "../components/Announsment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

import { userRequest, publicRequest } from "../requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { increaseQuantity, clearCart, decreaseQuantity, removeItemFromCart } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;
// console.log(KEY)

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
    color: ${(props) => props.type === "filled" && "white"};
    border-radius: 5px;
`;
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background-color: orange; */
    width: 50%;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 100%;
    /* height: 50vh; */
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
`;
const Clear = styled.span`
    color: white;
    font-weight: 600;
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    letter-spacing: 1.08px;
`;
const RemoveItem = styled.button`
    margin-top: 30px;
    background: black;
    outline: none;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    letter-spacing: 1.05px;
    cursor: pointer;
`;
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    // const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(cart.products);

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_sdvzj0nymhW1kU",
            amount: data.amount,
            currency: data.currency,
            name: data.title,
            description: data.title,
            image: data.img,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = "payment/verify";
                    const { data } = await userRequest.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = "payment/orders";
            const { data } = await userRequest.post(orderUrl, { amount: cart.total, title: cart.title });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // const handleCartItemQuantity = ()=>{
    //     dispatch(increaseQuantity({quantity:cart.products}))
    // }
    return (
        <Container>
            <Navbar />
            <Announsment />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to={'/'}>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bab(2)</TopText>
                        <TopText>Your Wishlist</TopText>
                        <Clear onClick={() => dispatch(clearCart())}>clear Cart</Clear>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Detail>
                                        <ProductName>
                                            {" "}
                                            <b>Product:</b> {product.title}
                                        </ProductName>
                                        <ProductId>
                                            {" "}
                                            <b>ID:</b> {product._id}
                                        </ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize>
                                            <b>Size</b> {product.size}
                                        </ProductSize>
                                    </Detail>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add
                                            onClick={() =>
                                                dispatch(
                                                    increaseQuantity({
                                                        id: product._id,
                                                    })
                                                )
                                            }
                                            style={{ cursor: "pointer" }}
                                        />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove
                                            onClick={() =>
                                                dispatch(
                                                    decreaseQuantity({
                                                        id: product._id,
                                                    })
                                                )
                                            }
                                            style={{ cursor: "pointer" }}
                                        />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                    <RemoveItem onClick={() => dispatch(removeItemFromCart({ id: product._id }))}>
                                        remove
                                    </RemoveItem>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {Math.abs(cart.total)}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.9</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {Math.abs(cart.total)}</SummaryItemPrice>
                        </SummaryItem>
                        {/* <StripeCheckout
                            name="arun shop"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                            billingAddress
                            shippingAddress
                            description="your total is $50"
                            amount={cart.total * 100}
                            currency="USD"
                            token={onToken}
                            stripeKey={KEY}
                        > */}
                        <SummaryButton onClick={handlePayment}>CHECKOUT NOW</SummaryButton>
                        {/* </StripeCheckout> */}
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
