import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Newsletter from '../../components/news';
import { useNavigate, Link } from 'react-router-dom';
import AcademicWarning from '../../components/academicWarning';
import Régles from '../../components/régleDeJeux';
import { useAuth } from '../../services/authContex';
import { getTicketInfo, updateTicket } from '../../api/participer';
import { toast } from 'react-toastify';
 
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

const ParticipateContainer = styled.section`
width: 100%;
background-color: white !important;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
`;

const Content = styled.div`
   max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
color: #000;
  margin-top: 3.75em;
  margin-bottom: 1.25em;
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 3.125em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 2.5em;
    font-size: 1.5em;
  }
`;

const Description = styled.p`
color: #666;
font-size: 1em;
line-height: 1.5;
margin-bottom: 2.5em;
max-width: 50em;
text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;

@media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1.875em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.25em;
    font-size: 0.9em;
  }
`;

const RulesLink = styled(Link)`
  display: block;
  color: #000;
  font-size: 1.5em;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  margin-bottom: 1.5em;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
const QuestionSection = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 2.5em;
  margin-bottom: 3.75em;
  & > p {
    margin-bottom: 20px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1.25em;
    margin-bottom: 1.875em;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: 50%;
    background-color: #eeeeee;
    margin-bottom: 1.875em;

    .MuiInputBase-root {
      color: #000;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #cccccc;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #4caf50;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #4caf50;
    }
    .MuiInputBase-input {
      padding: 1em; 
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
      }
  
      @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
      }
  }
`;
const Question = styled.p`
font-size: 1.5em;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
`;
const ButtonStyle = styled(Button)`
&& {
    color: white;
    margin-bottom: 1.25em;
    background-color: #2A5738;
    border-radius: 1.25em; 
    padding: 0.625em 1.875em; 
    font-size: 1.2em; 

    text-transform: none; 
    &:hover {
      background-color: #2A5738;
      opacity: 0.9;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        padding: 0.625em 1em;
      }
  }
`;

const Participer = () => {
  let navigate = useNavigate();
  const [openRules, setOpenRules] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const { decodedToken } = useAuth();
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (decodedToken && decodedToken.id) {
      setUserId(decodedToken.id);
    }
  }, [decodedToken]);
  
  const handleOpenRules = () => {
    setOpenRules(true);
  };

  const handleCloseRules = () => {
    setOpenRules(false);
  };

  const handleTicketNumberChange = (event) => {
    setTicketNumber(event.target.value);
  };
  const handleParticipateClick = async () => {
    if (!ticketNumber || !token) {
      console.error('Numéro de ticket ou token manquant');
      return;
    }
  
    try {
      const ticketInfo = await getTicketInfo(ticketNumber, token);
  
      if (ticketInfo && ticketInfo.id) {
        const updatedTicket = await updateTicket(ticketInfo.id, userId, token);
        if (updatedTicket) {
          setTicketNumber('');
          console.log('Ticket mis à jour avec succès', updatedTicket);
          toast.success("Participation enregistrée. Consultez la page de gains pour voir vos résultats.");
          
        }
      } else {
        console.error('Informations du ticket non récupérées');
      }
    } catch (error) {
      toast.error("Erreur lors de la participation.");
      console.error('Erreur lors de la participation:', error);
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <ParticipateContainer>
      <Content>
        <Title>TENTE TA CHANCE</Title>
        <Description>
          Avoir un de nos tickets de caisse suffit pour participer à ce jeu concours,
          personne n'est perdant, vous êtes 100% gagnant.
          Il est à présent temps de rentrer le numéro de ton ticket de caisse juste en dessous.
        </Description>
        <StyledTextField
          fullWidth
          variant="outlined"
          placeholder="Numéro de Ticket : XXXXXXX - XXXX"
          onChange={handleTicketNumberChange}
          value={ticketNumber} 
        />
        <RulesLink onClick={handleOpenRules}>*Consulter Les règles du jeu</RulesLink>
        <ButtonStyle variant="contained" color="primary" onClick={handleParticipateClick}>
          Jouer
        </ButtonStyle>
        <QuestionSection>
        <Question>Avez-vous une Question ?</Question>
          <ButtonStyle variant="outlined" color="primary" onClick={handleContactClick}>
            Contactez Nous
          </ButtonStyle>
        </QuestionSection>
        <AcademicWarning />
        <Newsletter />
      </Content>
      <Régles open={openRules} handleClose={handleCloseRules} />
    </ParticipateContainer>
  );
};

export default Participer;
