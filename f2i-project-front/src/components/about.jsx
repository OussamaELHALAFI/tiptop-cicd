import styled from 'styled-components';
import thé from '../assets/grainDeThé.png';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
padding: 50px 0; 
margin-top: -30px;

h2 {
    margin-bottom: 20px;
    color: #000000;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    font-family: 'Quicksand', sans-serif;
}
`;

const AboutSection = styled.div`
    display: flex;
    flex-direction: row;  
    width: 80%;  
    align-items: center;
    justify-content: space-between; 
`;

const TeaImage = styled.div`
    flex: 1;
    img {
        width: 100%;
        object-fit: cover;
    }
`;

const AboutText = styled.div`
    flex: 1;
    background-color: #FFFFFF;
    padding: 0 40px;
    font-family: Arial, sans-serif;

    p {
        color: #000000;
        font-size: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
    }
`;

function AboutUs() {
    return (
        <Container>
            <h2>Qui sommes nous ?</h2>
            <AboutSection>
                <TeaImage>
                    <img src={thé} alt="Thé vert en vrac de qualité premium vendu par Thé TipTop" />
                </TeaImage>
                <AboutText>
                    <p>
                        Nous sommes déterminés à révolutionner les perspectives des producteurs de thé et à apporter une contribution positive à l'industrie mondiale du thé. Chez Thé Tip Top, notre engagement se focalise sur la distribution de thés biologiques, cultivés dans le respect des principes environnementaux et sociaux, avec une attention particulière envers l'égalité entre les genres. Joignez-vous à notre mission en découvrant notre sélection de thés exceptionnels.
                    </p>
                </AboutText>
            </AboutSection>
        </Container>
    );
}

export default AboutUs;
