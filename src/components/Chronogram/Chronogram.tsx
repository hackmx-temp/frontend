import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Container, TitleChronogram } from "./styles";

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
      day: "27",
      month: "OCT",
      title: "Kick Off",
      description: "Damos inicio al hackathon!",
    },
    {
      day: "27",
      month: "OCT",
      title: "Workshops",
      description: "Varios workshops de diferentes tecnologías.",
    },
    {
      day: "27-28",
      month: "OCT",
      title: "Coding",
      description: "Tiempo de codificar y desarrollar tu proyecto.",
    },
    {
      day: "28",
      month: "OCT",
      title: "Premiación",
      description: "Presentaciones finales y premiaciones.",
    },
  ];

  return (
    <>
      <Container>
        <TitleChronogram>Cronograma</TitleChronogram>
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
