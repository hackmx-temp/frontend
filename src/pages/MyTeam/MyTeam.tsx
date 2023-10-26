import { ActionsWrapper, CustomInputLabel, HeaderWrapper, PageTitle, PageWrapper } from "./styles";
import theme from "../../theme/theme";
import { TeamTable } from "../../components/TeamTable";
import { Cancel, CheckCircle, Delete } from "@mui/icons-material";
import { EditTeam } from "../EditTeam";
import React, { useEffect } from "react";
import { MyTeamType, TeamRequest, deleteTeam, getJoinTeamRequests, getMyTeam, manageJoinTeamRequests } from "../../models/Team";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, setRef } from "@mui/material";
import { useNavigate } from "react-router-dom";

const teamTableCols = [
    { id: 'enrollment_id', label: 'Matrícula' },
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'campus', label: 'Campus' },
    { id: 'semester', label: 'Semestre' },
]

const requestedTable = [
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Acciones' }
]

const MyTeam = () => {

    // Estado para guardar la información de mi equipo
    const [teamInfo, setTeamInfo] = React.useState({} as MyTeamType);

    const [teamRequests, setTeamRequests] = React.useState([] as TeamRequest[])

    // Refrescar 
    const [refresh, setRefresh] = React.useState(false);
    // Carga
    const [loading, setLoading] = React.useState(true);

    // Dialog
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const createActions = (email: string) => {
        // Crear manejadores de click específicos para cada acción
        const handleAcceptClick = () => handleRequest(email, true);
        const handleRejectClick = () => handleRequest(email, false);

        return (
            <ActionsWrapper>
                <IconButton onClick={handleAcceptClick}>
                    <CheckCircle sx={{ color: theme.color.success.base }} />
                </IconButton>
                <IconButton onClick={handleRejectClick}>
                    <Cancel sx={{ color: theme.color.errors.base }} />
                </IconButton>
            </ActionsWrapper>
        );
    };

    const alertDialog = () => {
        return (
            <Dialog open={open}>
                <DialogTitle>Eliminar equipo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro que deseas eliminar el equipo?
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancelar</Button>
                        <Button onClick={handleDelete}>Eliminar</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
     }

const handleDelete = () => {
    deleteTeam().then((res) => {
        toast.success(res.data.message, {
            autoClose: 3000,
        });
        setTimeout(() => {
            navigate('/usuario/equipos');
        }, 3000);
    }).catch((err) => {
        toast.error(err.response.data.message, {
            autoClose: 2000,
        });
        setOpen(false);
    });
 }


const handleRequest = (email: string, status: boolean) => {
    manageJoinTeamRequests(email, status).then((res) => {
        toast.success(res.data.message, {
            autoClose: 2000,
        });
    }).catch((err) => {
        toast.error(err.response.data.message, {
            autoClose: 3000,
        });
    });
    setRefresh(!refresh);
    window.location.reload();
}

useEffect(() => {
    Promise.all([
        getMyTeam(),
        getJoinTeamRequests()
    ])
        .then(([teamRes, joinTeamRes]) => {
            setTeamInfo(teamRes.data);
            setTeamRequests(joinTeamRes.data);
        })
        .catch((err) => {
            toast.error(err.response ? err.response.data.message : err.message, {
                autoClose: 2000,
            });
        })
        .finally(() => {
            setLoading(false);
        });
}, [refresh]);

if (loading) return (<PageWrapper><CircularProgress /></PageWrapper>);

return (
    <PageWrapper>
        <ToastContainer />
        {alertDialog()}
        <HeaderWrapper>
            <PageTitle>Mi Equipo: {teamInfo.name} </PageTitle>
            <ActionsWrapper>
                <EditTeam teamName={teamInfo.name || ' '} teamMembers={teamInfo.members || []} />
                <Delete
                    sx={{
                        width: "46px",
                        height: "46px",
                        ":hover": {
                            cursor: "pointer",
                            color: theme.color.errors.base,
                        },
                    }}
                    onClick={() => setOpen(true)}
                />
            </ActionsWrapper>
        </HeaderWrapper>
        <CustomInputLabel>Participantes aceptados</CustomInputLabel>
        <TeamTable
            columns={teamTableCols}
            rows={teamInfo.members || []}
        />
        <CustomInputLabel>Participantes pendientes</CustomInputLabel>
        <TeamTable
            columns={requestedTable}
            rows={teamRequests ? teamRequests.map((request) => {
                return {
                    name: request.name,
                    email: request.email,
                    actions: createActions(request.email)
                }
            }) : []}
        />
    </PageWrapper>
);
};

export default MyTeam;