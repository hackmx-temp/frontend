import { Stack, Typography, Grid, ImageListItem } from '@mui/material'
import { Sponsor } from './types'
import { LogoImage } from './styles'

const sponsors = [
  { name: 'AWS' },
  { name: 'Dacompass'},
  { name: 'Liverpool' },
] as Sponsor[]

// Function to generate the grid of images for the sponsors
const generateGrid = (sponsors: Sponsor[]) => {
  return sponsors.map((sponsor) => (
    <Grid item key={sponsor.name} xs = {6} md = {4} display='flex' justifyContent='center' alignItems='center'>
      <LogoImage src={require(`../../imgs/logos/patrocinadores/${sponsor.name.toLowerCase()}.png`)} alt={sponsor.name} />
    </Grid>
  ))
}

const Sponsors = () => {
  return (
    <Stack bgcolor='#FA9507' pt={2}>
      <Typography variant='h4' align='center' gutterBottom>
        Patrocinadores
      </Typography>
      <Grid container sx={{backgroundColor: '#C2D0DE'}} justifyContent='center' alignItems='center'>
        {generateGrid(sponsors)}
      </Grid>
    </Stack>
  )
}

export default Sponsors