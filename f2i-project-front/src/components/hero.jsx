import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #CCC13A;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const HeroTitle = styled.h1`
    font-size: 18px;
    margin: 0;
`;

const HeroDescription = styled.h1`
    font-size: 18px;
    margin: 0;
`;

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroText>
                <HeroTitle>"Restez informé</HeroTitle>
                <HeroDescription>Profitez d'avantages exclusifs en vous inscrivant à notre newsletter."</HeroDescription>
            </HeroText>
        </HeroContainer>
    );
}

export default HeroSection;
