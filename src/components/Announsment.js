import styled from 'styled-components'

const Announsment = () => {
  return (
    <Container>
        Super Deal Free Shipping on Orders over $50
    </Container>
  )
}

export default Announsment


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.4px;
`