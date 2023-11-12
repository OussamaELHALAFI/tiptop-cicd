import styled from 'styled-components';
import { Typography } from '@mui/material';

const StyledPaper = styled.div`
    background-color: #CCC13A;  
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoBox = styled.div`
    h6, p {
        color: black;  
        margin: 0;
    }

    h6 {
        font-weight: bold;
    }
`;

const CountdownBox = styled.div`
    display: flex;
    gap: 10px;

    div {
        text-align: center;

        h4 {
            color: black;  
            margin: 0;
        }

        p {
            color: black;  
            margin: 0;
        }
    }
`;

function Countdown() {
    return (
        <StyledPaper>
            <InfoBox>
                <Typography variant="h6">
                    Participer avant le 15/12/2023 pour gagner
                </Typography>
                <Typography variant="body2">
                    *Voir Conditions générales
                </Typography>
            </InfoBox>
            <CountdownBox>
                <div>
                    <Typography variant="h4">35</Typography>
                    <Typography variant="body2">Jours</Typography>
                </div>
                <div>
                    <Typography variant="h4">:</Typography>
                </div>
                <div>
                    <Typography variant="h4">23</Typography>
                    <Typography variant="body2">Heures</Typography>
                </div>
                <div>
                    <Typography variant="h4">:</Typography>
                </div>
                <div>
                    <Typography variant="h4">35</Typography>
                    <Typography variant="body2">Minutes</Typography>
                </div>
                <div>
                    <Typography variant="h4">:</Typography>
                </div>
                <div>
                    <Typography variant="h4">45</Typography>
                    <Typography variant="body2">Secondes</Typography>
                </div>
            </CountdownBox>
        </StyledPaper>
    );
}

export default Countdown;
