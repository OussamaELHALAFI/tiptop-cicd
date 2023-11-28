import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 70px; 
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center; 

  @media (max-width: 768px) { // tablettes
    padding-top: 60px;
  }

  @media (max-width: 480px) { // mobiles
    padding-top: 50px;
  }
`;

const WinningsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px; 
  max-width: 800px; 
  width: 100%; 
  margin-left: auto; 
  margin-right: auto;

  @media (max-width: 768px) { // tablettes
    max-width: 500px;
  }

  @media (max-width: 480px) { // mobiles
    max-width: 100%;
    margin-top: 30px;
  }
`;

const WinningItem = styled.li`
  background-color: white;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) { // mobiles
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ClaimButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 480px) { // mobiles
    padding: 8px 16px;
    font-size: 14px;
  }
`;


const WinningsPage = () => {
  const [winnings, setWinnings] = useState([
    { id: 1, amount: '100€', claimed: false },
    { id: 2, amount: '250€', claimed: false },
  ]);

  const claimWinning = (id) => {
    setWinnings(winnings.map(winning => 
      winning.id === id ? { ...winning, claimed: true } : winning
    ));
  };

  return (
    <PageContainer>
      <h1>Mes Gains</h1>
      <WinningsList>
        {winnings.map(winning => (
          <WinningItem key={winning.id}>
            <span>{winning.amount}</span>
            {winning.claimed ? (
              <span>Réclamé</span>
            ) : (
              <ClaimButton onClick={() => claimWinning(winning.id)}>
                Réclamer
              </ClaimButton>
            )}
          </WinningItem>
        ))}
      </WinningsList>
    </PageContainer>
  );
};

export default WinningsPage;
