import React from 'react';
import styled from 'styled-components';

const InformationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #777;
`;

const Information = () => {
  return (
    <InformationContainer>
      <Title>Informações sobre Doação de Sangue</Title>

      <Section>
        <SubTitle>Quando posso doar sangue?</SubTitle>
        <Paragraph>
          Você pode doar sangue se estiver em boas condições de saúde, tiver entre 16 e 69 anos de idade
          (para doadores com menos de 18 anos, é necessário o consentimento dos responsáveis), pesar no mínimo 50kg
          e estiver descansado e bem alimentado.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Restrições para doação de sangue</SubTitle>
        <Paragraph>
          Existem algumas restrições para doação de sangue, tais como: ter tido hepatite após os 11 anos de idade,
          ter sido diagnosticado com HIV ou AIDS, ter tido doença de Chagas, entre outras. É importante consultar as
          restrições vigentes antes de realizar a doação.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Curiosidades sobre doação de sangue</SubTitle>
        <Paragraph>
          Sabia que uma única doação de sangue pode salvar até três vidas? Além disso, o sangue doado é separado em
          diferentes componentes (como plaquetas, plasma e hemácias) e pode ser utilizado para tratar diferentes
          condições médicas. A doação de sangue é um gesto solidário que pode fazer a diferença na vida de outras pessoas.
        </Paragraph>
      </Section>
    </InformationContainer>
  );
};

export default Information;
