import React, { useState } from 'react';
import styled from 'styled-components';

const BloodTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const BloodTypesCard = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Select = styled.select`
  font-size: 18px;
  padding: 8px 12px;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ResultContainer = styled.div`
  margin-top: 30px;
`;

const ResultTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const ResultText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const BloodTypes = () => {
  const bloodTypesData = [
    { type: 'A+', canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
    { type: 'A-', canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
    { type: 'B+', canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
    { type: 'B-', canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
    { type: 'AB+', canDonateTo: ['AB+'], canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    { type: 'AB-', canDonateTo: ['AB+', 'AB-'], canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'] },
    { type: 'O+', canDonateTo: ['A+', 'B+', 'AB+', 'O+'], canReceiveFrom: ['O+', 'O-'] },
    { type: 'O-', canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], canReceiveFrom: ['O-'] },
  ];

  const [userBloodType, setUserBloodType] = useState('');
  const [filteredBloodType, setFilteredBloodType] = useState(null);

  const handleSelectChange = (event) => {
    setUserBloodType(event.target.value);
  };

  const handleCheckBloodType = () => {
    const filteredType = bloodTypesData.find(
      (bloodType) => bloodType.type === userBloodType
    );
    setFilteredBloodType(filteredType);
  };

  return (
    <BloodTypesContainer>
      <BloodTypesCard>
        <Title>BloodLink - Tipos Sanguíneos</Title>
        <Select value={userBloodType} onChange={handleSelectChange}>
          <option value="">Selecione um tipo sanguíneo</option>
          {bloodTypesData.map((bloodType) => (
            <option key={bloodType.type} value={bloodType.type}>
              {bloodType.type}
            </option>
          ))}
        </Select>
        <Button onClick={handleCheckBloodType}>Meu tipo sanguíneo</Button>

        {filteredBloodType && (
          <ResultContainer>
            <ResultTitle>Resultado:</ResultTitle>
            <ResultText>
              Tipo Sanguíneo: {filteredBloodType.type}
              <br />
              Pode Doar para: {filteredBloodType.canDonateTo.join(', ')}
              <br />
              Pode Receber de: {filteredBloodType.canReceiveFrom.join(', ')}
            </ResultText>
          </ResultContainer>
        )}
      </BloodTypesCard>
    </BloodTypesContainer>
  );
};


export default BloodTypes;
