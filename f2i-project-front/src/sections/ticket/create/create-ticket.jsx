import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// eslint-disable-next-line import/no-extraneous-dependencies
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormControlLabel from '@mui/material/FormControlLabel';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
    company: '',
    role: '',
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    // Add submission logic here
  };

  const [image, setImage] = useState(null);
  const [isVerified, setIsVerified] = useState(true);

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageUpload = (event) => {
    // Logic to handle image upload
  };

  const handleVerificationChange = (event) => {
    setIsVerified(event.target.checked);
  };

  return (
    <Container maxWidth="lg" className="css-1qsxih2">
      <Box className="css-1p24318">
        <Stack className="css-u4p24i">
          <Box className="css-i9gxme">
            <Typography variant="h4" gutterBottom className="css-1bhrkuh">
              Create a new user
            </Typography>
            <Breadcrumbs className="css-qz81im">{/* Breadcrumbs here */}</Breadcrumbs>
          </Box>
        </Stack>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} className="css-v57kt1">
          {/* Form Fields and Other Inputs */}
          <Grid item xs={12} md={4} className="css-grry9j">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <Button component="label">
                  <input type="file" hidden onChange={handleImageUpload} />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera fontSize="large" />
                  </IconButton>
                </Button>
                {image && <Avatar src={image} sx={{ width: 90, height: 90, mb: 2 }} />}
                <Typography variant="caption" display="block" gutterBottom>
                  Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
                </Typography>
                <FormControlLabel
                  control={<Switch checked={isVerified} onChange={handleVerificationChange} />}
                  label="Email Verified"
                  labelPlacement="start"
                  sx={{ mt: 2 }}
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ padding: 3 }}>
              <Grid container spacing={2}>
                {/* Map through userData to create TextField for each entry */}
                {Object.entries(userData).map(([key, value]) => {
                  if (key !== 'isVerified') {
                    return (
                      <Grid item xs={12} sm={6} key={key}>
                        <TextField
                          fullWidth
                          label={
                            key.charAt(0).toUpperCase() +
                            key
                              .slice(1)
                              .replace(/([A-Z])/g, ' $1')
                              .trim()
                          } // Converts camelCase to regular form labels
                          name={key}
                          value={value}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                    );
                  }
                  return null;
                })}
              </Grid>
              <br />
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="inherit">
                  Create User
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateUser;
