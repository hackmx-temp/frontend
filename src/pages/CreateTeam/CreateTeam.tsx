import { Box, Button, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AddParticipantWrapper, CustomInputLabel, HeaderWrapper, PageTitle, PageWrapper } from "./styles";
import theme from "../../theme/theme";
import { TeamTable } from "../../components/TeamTable";
import { AddCircle, ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
import { Member, addMember, createTeam } from "../../models/Team";
import { ToastContainer, toast } from "react-toastify";


const teamTableCols = [
    { id: 'enrollment_id', label: 'Matrícula' },
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'campus', label: 'Campus' },
    { id: 'semester', label: 'Semestre' },
]

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const CreateTeam = () => {
    // Estado para los participantes
    const [teamMembers, setTeamMembers] = React.useState<Member[] | []>([]);
    // Estado para el nombre del equipo
    const [teamName, setTeamName] = React.useState('');
    // Estado para saber si ya se ha creado el equipo
    const [teamCreated, setTeamCreated] = React.useState(false);
    // Correo validador
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);

    const validateError = () => {
        if (!EMAIL_REGEX.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handleCreateTeam = () => {
        createTeam(teamName).then((_) => {
            setTeamCreated(true);
        }).catch((error) => {
            toast.error(error.response.data.message);
        })
    }

    const handleAddParticipant = () => {
        addMember(email).then((res) => {
            console.log(res.data);
            setTeamMembers(res.data);
            toast.success("Participante agregado");
        }).catch((error) => {
            toast.error(error.response.data.message);
        })
    }

    return (
        <PageWrapper>
            <ToastContainer />
            <Link
                to={"/usuario/equipos"}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}>
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
            <TextField
                label="Nombre del equipo"
                type="text"
                variant="outlined"
                fullWidth
                required
                sx={{ margin: "15px 0", width: '100%' }}
                InputProps={{
                    style: {
                        borderRadius: "14px",
                    },
                }}
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            // onBlur={}
            // error={}
            // helperText={}
            />
            <Box display='flex' justifyContent='center' mb={3}>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "10px",
                        fontSize: "20px",
                        fontWeight: "500",
                        backgroundColor: theme.color.mainBlue,
                        color: theme.color.white,
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#114880",
                        },
                    }}
                    onClick={handleCreateTeam}
                    disabled={teamCreated}
                >
                    Crear equipo
                </Button>
            </Box>
            {teamCreated &&
                (<>
                    <CustomInputLabel>Agrega participantes al equipo</CustomInputLabel>
                    <AddParticipantWrapper>
                        <FormControl
                            fullWidth
                            required
                            sx={{ width: '100%' }}
                        // error={}
                        >
                            <TextField label="Correo del participante"
                                type="text"
                                variant="outlined"
                                fullWidth
                                inputProps={{
                                    style: {
                                        borderRadius: "14px",
                                    },
                                }}
                                error={emailError}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); validateError(); }}
                            />
                            <FormHelperText>{emailError ? "Correo invalido" : "Puede ser correo personal o institucional"}</FormHelperText>
                        </FormControl>
                        <IconButton
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: theme.color.mainBlue,
                                color: theme.color.white,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#114880",
                                },
                                paddingLeft: 2,
                                paddingRight: 2
                            }}
                            onClick={handleAddParticipant}
                        >
                            <AddCircle />
                        </IconButton>
                    </AddParticipantWrapper>
                    <TeamTable
                        columns={teamTableCols}
                        rows={teamMembers}
                    />
                </>)}
        </PageWrapper>
    );
};

export default CreateTeam;