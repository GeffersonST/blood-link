import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  z-index: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.1)' : 'scale(1)')};
  margin: 10px;

  &:hover {
    z-index: 1;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #ffd700;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = (index) => {
    setIsHovered(index);
  };

  return (
    <HomeContainer>
      <Fade>
        <CardContainer
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(false)}
          isHovered={isHovered === 1}
        >
          <CardContent>
            <Title>Card 1</Title>
            <Description>This is the content of Card 1.</Description>
          </CardContent>
        </CardContainer>
      </Fade>
      <ButtonContainer>
        <Fade>
          <Button>Click me</Button>
        </Fade>
      </ButtonContainer>
      <Fade>
        <CardContainer
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(false)}
          isHovered={isHovered === 2}
        >
          <CardContent>
            <Title>Card 2</Title>
            <Description>This is the content of Card 2.</Description>
          </CardContent>
        </CardContainer>
      </Fade>
    </HomeContainer>
  );
};

export default Home;
