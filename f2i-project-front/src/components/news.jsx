import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const NewsletterSectionStyled = styled.section`
background-color: #EDEDED;
padding: 10px 0;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 2px 0;
    color: #333;
}

p {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 2px;
    width: 80%;
    color: #777;
}

.signup-form {
    display: flex;
    gap: 10px;

    .MuiTextField-root {
        width: 240px;
        height: 30px;

        .MuiInputBase-root {
            height: 30px;
            background-color: white;
        }

        .MuiOutlinedInput-input {
            padding: 5px 10px;
        }
    }

    .MuiButton-root {
        height: 35px;
        padding: 5px 20px;
        font-size: 12px;
        background-color: #1976D2;
        color: white;
        &:hover {
            background-color: #1565C0;
        }
    }
}


@media (max-width: 768px) {
    padding: 20px 0;

    h2 {
        font-size: 18px;
    }

    p {
        font-size: 13px;
        width: 90%;
    }

    .signup-form {
        flex-direction: column;
        align-items: center;
        width: 80%;

        .MuiTextField-root {
            width: 100%;
        }
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 16px;
    }

    p {
        font-size: 12px;
    }

    .signup-form {
        .MuiButton-root {
            width: 100%;
        }
    }
}


@media (max-resolution: 150dpi) {
    font-size: larger;
}
`;

function NewsletterSignup() {
    return (
        <NewsletterSectionStyled>
            <h2>Restez à l’écoute !</h2>
            <p>"Restez informé et profitez d'avantages exclusifs en vous inscrivant à notre newsletter !"</p>
            <div className="signup-form">
                <TextField 
                    variant="outlined" 
                    placeholder="Exemple@gmail.com" 
                    size="small"
                />
                <Button variant="contained">S'abonner</Button>
            </div>
        </NewsletterSectionStyled>
    );
}

export default NewsletterSignup;
