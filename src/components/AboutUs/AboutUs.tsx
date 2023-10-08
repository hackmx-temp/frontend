import React from "react";
import { BigInfo } from "../BigInfo";
import { ButtonMui } from "../ButtonMui";
import { MainInfoDescription, MainInfoText, MainInfoTitle, ValuesContainer } from "./styles";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme/theme";

const AboutUs = () => {
  return (
    <Grid container columns={5} spacing={2} display='flex' alignItems='center' justifyContent='center'>
      <Grid item xs={5}>
        <Typography variant="h2" textAlign='center' color={theme.palette.primary.main}>
          ¿Qué es el HackMX 5?
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h5" textAlign='center'>Es un evento de colaboración dónde participantes con habilidades en </Typography>
      </Grid>
      <Grid item xs={2} md={1}>
        <ValuesContainer>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Emprendimiento
          </Typography>
        </ValuesContainer>
      </Grid>
      <Grid item xs={2} md={1}>
        <ValuesContainer>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Programación
          </Typography>
        </ValuesContainer>
      </Grid>
      <Grid item xs={0} md={1} display='flex' justifyContent='center'>
        <img src='question-women.png' alt="AboutImage" />
      </Grid>
      <Grid item xs={2} md={1}>
        <ValuesContainer>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Diseño
          </Typography>
        </ValuesContainer>
      </Grid>
      <Grid item xs={2} md={1}>
        <ValuesContainer>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Marketing
          </Typography>
        </ValuesContainer>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h6" textAlign='center'>
          Trabajan en equipos desarrollando soluciones innovadoras para problemas específicos planteados por patrocinadores. Los participantes crean prototipos de:
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Box m={1} p='2rem' bgcolor={theme.color.accent} borderRadius='25px'>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Marketing
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box m={1} p='2rem' bgcolor={theme.color.accent} borderRadius='25px'>
          <Typography variant="h6" textAlign='center' fontWeight='bold'>
            Hardware
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box m={1} p='2rem' bgcolor={theme.color.accent} borderRadius='25px'>
          <Typography variant="h5" textAlign='center' fontWeight='bold'>
            Servicios web
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h5" fontWeight='bold' textAlign='center' p={5}>
          Para su presentación y premiación
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h4" fontWeight='bold' textAlign='center' p={5}>
          ATREVETE A VIVIR LA EXPERIENICA QUE TE OFRECE EL HACKMX5
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Link to='/registro' style={{
          color: 'inherit',
          textDecoration: 'inherit',
        }}>
          <Typography variant="h3" fontWeight='bold' textAlign='center' p={5} >
            ¡REGISTRATE YA!
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
