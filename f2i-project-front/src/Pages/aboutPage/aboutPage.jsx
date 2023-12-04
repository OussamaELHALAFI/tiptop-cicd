import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: 'Quicksand', sans-serif;
`;

const Bold = styled.span`
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>À propos de ThéTipTop</Title>
      <Paragraph>
        Basée au <Bold>18 rue Léon Frot, 75011 Paris</Bold>, <Bold>ThéTipTop</Bold> est une société reconnue pour sa promotion de gammes de thés de très grande qualité. En tant que société anonyme (SA) avec un capital social de <Bold>150 000€</Bold>, elle est dirigée par son dynamique gérant, <Bold>Mr Eric Bourdon</Bold>.
      </Paragraph>
      <Paragraph>
        Notre passion pour le thé se manifeste à travers nos mélanges signatures uniques, incluant des thés détox, des thés blancs, des thés légumes, infusions, et bien plus encore. L’authenticité et la qualité sont au cœur de notre démarche, c’est pourquoi tous nos thés sont <Bold>bios et faits à la main (Handmade)</Bold>.
      </Paragraph>
      <Paragraph>
        En célébration de l'ouverture de notre <Bold>10ème boutique à Nice</Bold>, nous sommes ravis d'organiser un jeu-concours de type tirage au sort. Ce concours est ouvert à tous nos clients possédant un ticket de caisse ou une facture de plus de <Bold>49€</Bold>. Chaque ticket contiendra un numéro unique à 10 chiffres offrant une chance de participer et de gagner de fabuleux prix.
      </Paragraph>
      <Paragraph>
        Chez <Bold>ThéTipTop</Bold>, nous nous engageons à offrir à nos clients non seulement des produits d'exception, mais aussi une expérience mémorable. Rejoignez-nous dans cette aventure gustative et découvrez pourquoi ThéTipTop est la référence en matière de thés de qualité.
      </Paragraph>
    </AboutContainer>
  );
}

export default AboutPage;
