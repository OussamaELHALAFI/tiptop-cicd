import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logUser, createUser } from '../../api/auth';
import { accountService } from '../../services/account.service';
import { useAuth } from '../../services/authContex';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
background-color: #f5f5f5;
padding: 40px;
border-radius: 8px;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 80%; 
position: relative; // Pour le trait vertical

@media (max-width: 768px) {
  flex-direction: column;
  padding: 20px;
  width: 90%;
}

@media (max-width: 480px) {
  width: 100%;
  padding: 10px;
}

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VerticalLine = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 90%;
width: 2px;
background-color: green;

@media (max-width: 768px) {
  display: none;
}
`;

const ValidButton = styled.button`
padding: 10px 20px;
border: none;
border-radius: 4px;
background-color: #4CAF50;
color: white;
cursor: pointer;

&:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  padding: 15px 30px;
}
`;

const Input = styled.input`
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;

@media (max-width: 768px) {
  width: calc(100% - 20px); // Account for padding
}

@media (max-width: 480px) {
  width: calc(100% - 10px); // Account for smaller padding
}
`;

const SocialButton = styled(Button)`
padding: 10px 20px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
gap: 10px;

@media (max-width: 768px) {
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
`;

const SignupLogin = () => {
    const navigate = useNavigate();
    const { setToken, handleAuthChange  } = useAuth();

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (accountService.isLogged()) {
            navigate('/home');
        }
    }, [navigate]);

    const handleLoginChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    const handleSignupChange = (e) => setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!loginForm.email.trim() || !loginForm.password.trim()) {
            setError('Veuillez remplir tous les champs.');
            return;
        }
        setError('');
        setIsSubmitting(true);

        try {
            const res = await logUser(loginForm);

            if (res.ok) {
                const token = await res.text();
                accountService.saveToken(token);
                setToken(token);
                handleAuthChange(true);

                navigate('/home');
            } else {
                setError('Email ou mot de passe incorrect.');
            }
        } catch (error) {
            console.error(error);
            setError('Une erreur est survenue lors de la connexion.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const res = await createUser(signupForm);

            if (res.status === 201) {
                setError('');
                navigate('/signup');
            } else {
                const data = await res.json();
                setError(data.message || 'Erreur lors de la création du compte.');
            }
        } catch (error) {
            console.error(error);
            setError('Une erreur est survenue lors de la création du compte.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleGoogleLogin = () => {
        // Implementation of Google login logic
      };
    
      const handleFacebookLogin = () => {
        // Implementation of Facebook login logic
      };

    return (
        <PageContainer>
            <FormContainer>
                <Form onSubmit={handleSignupSubmit}>
                    <h3>Inscription</h3>
                    <Input type="text" placeholder="Nom" name="username" value={signupForm.username} onChange={handleSignupChange} />
                    <Input type="email" placeholder="Email" name="email" value={signupForm.email} onChange={handleSignupChange} />
                    <Input type="password" placeholder="Mot de passe" name="password" value={signupForm.password} onChange={handleSignupChange} />
                    <ValidButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Inscription en cours...' : 'Créer un compte'}</ValidButton>
                    <SocialButton startIcon={<GoogleIcon />} onClick={handleGoogleLogin} style={{ backgroundColor: '#4285F4', color: 'white' }}>
                        Google
                    </SocialButton>
                    <SocialButton startIcon={<FacebookIcon />} onClick={handleFacebookLogin} style={{ backgroundColor: '#1877F2', color: 'white' }}>
                        Facebook
                    </SocialButton>
                </Form>
                <VerticalLine />
                <Form onSubmit={handleLoginSubmit}>
                    <h3>Connexion</h3>
                    <Input type="email" placeholder="Email" name="email" value={loginForm.email} onChange={handleLoginChange} />
                    <Input type="password" placeholder="Mot de passe" name="password" value={loginForm.password} onChange={handleLoginChange} />
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                    <ValidButton type="submit" disabled={isSubmitting || !loginForm.email.trim() || !loginForm.password.trim()}>
                        {isSubmitting ? 'Connexion en cours...' : 'Connexion'}
                    </ValidButton>
                </Form>
            </FormContainer>
        </PageContainer>
    );
};

export default SignupLogin;

