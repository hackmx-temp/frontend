import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AddParticipantWrapper, CustomInputLabel, HeaderWrapper, PageTitle, PageWrapper } from "./styles";
import theme from "../../theme/theme";
import { TeamMembersTable } from "../../components/TeamMembersTable";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

const teamColumns = ["#", "Nombre del participante", "Correo", "Campus", "Semestre"];
const teamMembers = [
    { id: "A0000000", name: "Clara", email: "A0000000@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000001", name: "Sofía", email: "A0000001@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000002", name: "Emiliano", email: "A0000002@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000003", name: "Alfonso", email: "A0000003@tec.mx", campus: "CCM", semester: "7" },
];

const CreateTeam = () => {

    return (
        <PageWrapper>
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
            // value={resourceName}
            // onChange={handleResourceName}
            // onBlur={handleResourceNameBlur}
            // error={resourceNameError}
            // helperText={resourceNameError ? 'Este campo es obligatorio' : ''}
            />
            <CustomInputLabel>Invita participantes al equipo</CustomInputLabel>
            <AddParticipantWrapper>
                <FormControl
                    fullWidth
                    required
                    sx={{ width: '100%' }}
                // error={motorTypeError}
                >
                    <InputLabel id='team-member'>Nombre del participante</InputLabel>
                    <Select
                        labelId='team-member'
                        label="Nombre del participante *"
                        // onChange={handleType}
                        // value={motorType}
                        // onBlur={handleTypeBlur}
                        sx={{ borderRadius: '14px' }}
                    >
                        <MenuItem value="A0000000">Sofía</MenuItem>
                        <MenuItem value="A0000001">Clara</MenuItem>
                        <MenuItem value="A0000002">Emiliano</MenuItem>
                        <MenuItem value="A0000003">Alfonso</MenuItem>
                    </Select>
                    {/* {motorTypeError && <FormHelperText>Este campo es obligatorio</FormHelperText>} */}
                </FormControl>
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
                        "&:hover": {
                            backgroundColor: "#114880",
                        },
                    }}
                // onClick={NewReservation}
                // disabled={loadingRequest}
                >
                    Invitar
                </Button>
            </AddParticipantWrapper>
            <TeamMembersTable
                columnNames={teamColumns}
                data={teamMembers}
            />
        </PageWrapper>
    );
};

export default CreateTeam;