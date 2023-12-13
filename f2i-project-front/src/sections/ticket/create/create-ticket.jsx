import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { createTicket} from '../../../api/admin';


const CreateTicket = () => {
  const token = localStorage.getItem('token');
  const [TicketData, setTicketData] = useState({
    numJeux: '',
  });

  const handleTiketChange = async (e) => {
    setTicketData({ ...TicketData, [e.target.name]: e.target.value });
  };

  const handleClickCreatePage = async() => {
    try {
      const response = await createTicket(token);
      // Gérez la réponse ici
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la création du ticket:", error);
    }
    console.log('oki');
};

  return (
    <Container maxWidth="lg" className="css-1qsxih2">
      <Box className="css-1p24318">
        <Stack className="css-u4p24i">
          <Box className="css-i9gxme">
            <Typography variant="h4" gutterBottom className="css-1bhrkuh">
              Create a new Ticket
            </Typography>
            <Breadcrumbs className="css-qz81im">{/* Breadcrumbs here */}</Breadcrumbs>
          </Box>
        </Stack>
      </Box>

      <form onSubmit= ''>
        <Paper style={{ padding: '16px', margin: '16px 0' }}>
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={12}>
              <TextField
                label="Num Ticket"
                name="numJeux"
                fullWidth
                value={TicketData.nomJeux}
                // onChange={handleTiketChange}
                variant="outlined"
                disabled="disabled"
              />
              </Grid>
          </Grid>
        </Paper>

        <Button type="submit" onClick={handleClickCreatePage} variant="contained"  color="inherit">
          Create Ticket
        </Button>
      </form>
    </Container>
  );
};

export default CreateTicket;