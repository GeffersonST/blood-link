import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #ff5757;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 12px;

  &:hover {
    background-color: #e74c4c;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>BloodLink - Página Inicial</Title>
      <Description>
        Bem-vindo ao BloodLink, o aplicativo para doação de sangue. Junte-se a nós e salve vidas!
      </Description>
      <StyledLink to="/information">Informações</StyledLink>
      <StyledLink to="/map">Locais de Coleta</StyledLink>
      <StyledLink to="/bloodtypes">Tipos Sanguíneos</StyledLink>
    </HomeContainer>
  );
}

export default Home;
