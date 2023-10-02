import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Container, ContainerInfo, TitleChronogram } from "./styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface AgendaItemProps {
  day: string;
  month: string;
  title: string;
  description: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  day,
  month,
  title,
  description,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
    <Paper
      elevation={3}
      sx={{
        width: 70,
        height: 70,
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2,
        backgroundColor: "#99BCDE",
      }}
    >
      <Typography variant="h6" sx={{ fontFamily: "Popins, sans-serif" }}>
        {day}
      </Typography>
      <Typography variant="caption" sx={{ fontFamily: "Popins, sans-serif" }}>
        {month}
      </Typography>
    </Paper>
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: 2,
        borderLeft: "2px solid gray",
        position: "relative",
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{ fontFamily: "Popins, sans-serif", fontWeight: "Bold " }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography sx={{ fontFamily: "Popins, sans-serif" }}>
          {description}
        </Typography>
      )}
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: "50%",
          left: -2,
          width: 4,
          height: 4,
          backgroundColor: "gray",
          borderRadius: "50%",
          transform: "translateY(-50%)",
        }}
      ></Box>
    </Box>
  </Box>
);

const Chronogram: React.FC = () => {
  const agendaItems = [
    {
      day: "1",
      month: "JAN",
      title: "Kick Off",
      description: "Starting the hackathon with a bang!",
    },
    {
      day: "2",
      month: "JAN",
      title: "Workshops",
      description: "Various workshops on different technologies.",
    },
    {
      day: "3",
      month: "JAN",
      title: "Coding",
      description: "Main coding day, get your hacks ready!",
    },
    {
      day: "4",
      month: "JAN",
      title: "Judging & Awards",
      description: "Final presentations and award ceremony.",
    },
  ];

  return (
    <>
      <Container>
        <TitleChronogram>Cronograma</TitleChronogram>
        <div>
          <ContainerInfo>
            <LocationOnOutlinedIcon />
            Tecnológico de Monterrey Campus Ciudad de México
          </ContainerInfo>
        </div>
        <Box>
          {agendaItems.map((item, index) => (
            <AgendaItem key={index} {...item} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Chronogram;
