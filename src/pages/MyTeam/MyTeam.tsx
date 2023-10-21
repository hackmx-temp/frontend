import { TextField } from "@mui/material";
import { ActionsWrapper, CustomInputLabel, HeaderWrapper, PageTitle, PageWrapper } from "./styles";
import theme from "../../theme/theme";
import { TeamTable } from "../../components/TeamTable";
import { Cancel, CheckCircle, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { EditTeam } from "../EditTeam";

const teamTableCols = [
    { id: 'id', label: 'Matrícula' },
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'campus', label: 'Campus' },
    { id: 'semester', label: 'Semestre' },
]

const teamMembers = [
    { id: "A0000000", name: "Clara", email: "A0000000@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000001", name: "Sofía", email: "A0000001@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000002", name: "Emiliano", email: "A0000002@tec.mx", campus: "CCM", semester: "7" },
    { id: "A0000003", name: "Alfonso", email: "A0000003@tec.mx", campus: "CCM", semester: "7" },
];

const requestedTable = [
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Acciones' }
]

const requestedUsers = [
    {
        name: "Clara", email: "A0000000@tec.mx",
        actions: <ActionsWrapper>
            <CheckCircle sx={{ color: theme.color.success.base }} />
            <Cancel sx={{ color: theme.color.errors.base }} />
        </ActionsWrapper>
    },
    {
        name: "Sofía", email: "A0000001@tec.mx",
        actions: <ActionsWrapper>
            <CheckCircle sx={{ color: theme.color.success.base }} />
            <Cancel sx={{ color: theme.color.errors.base }} />
        </ActionsWrapper>
    },
    {
        name: "Emiliano", email: "A0000002@tec.mx",
        actions: <ActionsWrapper>
            <CheckCircle sx={{ color: theme.color.success.base }} />
            <Cancel sx={{ color: theme.color.errors.base }} />
        </ActionsWrapper>
    },
    {
        name: "Alfonso", email: "A0000003@tec.mx",
        actions: <ActionsWrapper>
            <CheckCircle sx={{ color: theme.color.success.base }} />
            <Cancel sx={{ color: theme.color.errors.base }} />
        </ActionsWrapper>
    },
];

const MyTeam = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/usuario/miequipo/editar`);
    };

    return (
        <PageWrapper>
            <HeaderWrapper>
                <PageTitle>Mi Equipo: Equipo X </PageTitle>
                <ActionsWrapper>
                    <EditTeam />
                    <Delete
                        sx={{
                            width: "46px",
                            height: "46px",
                            ":hover": {
                                cursor: "pointer",
                                color: theme.color.errors.base,
                            },
                        }}
                    />
                </ActionsWrapper>
            </HeaderWrapper>
            <CustomInputLabel>Participantes aceptados</CustomInputLabel>
            <TeamTable
                columns={teamTableCols}
                rows={teamMembers}
            />
            <CustomInputLabel>Participantes pendientes</CustomInputLabel>
            <TeamTable
                columns={requestedTable}
                rows={requestedUsers}
            />
        </PageWrapper>
    );
};

export default MyTeam;