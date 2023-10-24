import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  AddParticipantWrapper,
  CreateTeamWrapper,
  CustomInputLabel,
  HeaderWrapper,
  PageTitle,
  PageWrapper,
} from "./styles";
import theme from "../../theme/theme";
import { TeamTable } from "../../components/TeamTable";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const teamTableCols = [
  { id: "id", label: "Matrícula" },
  { id: "name", label: "Nombre" },
  { id: "email", label: "Email" },
  { id: "campus", label: "Campus" },
  { id: "semester", label: "Semestre" },
];

const teamMembers = [
  {
    id: "A0000000",
    name: "Clara",
    email: "A0000000@tec.mx",
    campus: "CCM",
    semester: "7",
  },
  {
    id: "A0000001",
    name: "Sofía",
    email: "A0000001@tec.mx",
    campus: "CCM",
    semester: "7",
  },
  {
    id: "A0000002",
    name: "Emiliano",
    email: "A0000002@tec.mx",
    campus: "CCM",
    semester: "7",
  },
  {
    id: "A0000003",
    name: "Alfonso",
    email: "A0000003@tec.mx",
    campus: "CCM",
    semester: "7",
  },
];

const CreateTeam = () => {
  const [isTeamCreated, setIsTeamCreated] = useState(false);

  return (
    <PageWrapper>
      <Link
        to={"/usuario/equipos"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <HeaderWrapper>
          <ArrowBackIosNew
            sx={{
              fontSize: "30px",
              cursor: "pointer",
              marginRight: "20px",
            }}
            onClick={() => console.log("back")}
          />
          <PageTitle>Crea tu equipo</PageTitle>
        </HeaderWrapper>
      </Link>
      <CustomInputLabel>Ingresa el nombre del equipo</CustomInputLabel>
      <CreateTeamWrapper>
        <TextField
          label="Nombre del equipo"
          type="text"
          variant="outlined"
          fullWidth
          required
          sx={{ margin: "15px 0", width: "100%" }}
          InputProps={{
            style: {
              borderRadius: "14px",
            },
          }}
          // value={}
          // onChange={}
          // onBlur={}
          // error={}
          // helperText={}
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "300px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "500",
            backgroundColor: theme.color.mainBlue,
            color: theme.color.white,
            textTransform: "none",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#114880",
            },
          }}
          onClick={() => setIsTeamCreated(true)}
          disabled={isTeamCreated}
          // TODO: check if the user is already in a team
        >
          Crear equipo
        </Button>
      </CreateTeamWrapper>
      {isTeamCreated && ( // Only render this block if isTeamCreated is true
        <div>
          <CustomInputLabel>Agregar participante al equipo</CustomInputLabel>
          <AddParticipantWrapper>
            <TextField
              label="Matrícula del participante"
              type="text"
              variant="outlined"
              fullWidth
              required
              sx={{ margin: "15px 0", width: "100%" }}
              InputProps={{
                style: {
                  borderRadius: "14px",
                },
              }}
              // value={}
              // onChange={}
              // onBlur={}
              // error={}
              // helperText={}
            />
            <Button
              variant="contained"
              sx={{
                width: "100px",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: "500",
                backgroundColor: theme.color.mainBlue,
                color: theme.color.white,
                textTransform: "none",
                padding: "0 25px",
                "&:hover": {
                  backgroundColor: "#114880",
                },
              }}
              // onClick={}
              // disabled={}
            >
              Agregar
            </Button>
          </AddParticipantWrapper>
          <TeamTable columns={teamTableCols} rows={teamMembers} />
        </div>
      )}
    </PageWrapper>
  );
};

export default CreateTeam;
