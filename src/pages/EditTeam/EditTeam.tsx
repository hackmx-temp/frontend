import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Cancel, Close, Edit } from '@mui/icons-material';
import { ButtonContainer, CrossContainer, CustomInputLabel, ModalHeader } from './styles';
import { TextField } from '@mui/material';
import { TeamTable } from '../../components/TeamTable';
import theme from '../../theme/theme';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    minWidth: '380px',
    maxHeight: '80%',
    overflow: 'auto',
    borderRadius: '20px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const teamTableCols = [
    { id: 'actions', label: 'Acción' },
    { id: 'id', label: 'Matrícula' },
    { id: 'name', label: 'Nombre' },
    { id: 'email', label: 'Email' },
    { id: 'campus', label: 'Campus' },
    { id: 'semester', label: 'Semestre' },
]

const teamMembers = [
    {
        actions: <Cancel
            sx={{
                color: theme.color.errors.base,
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        />,
        id: "A0000000",
        name: "Clara",
        email: "A0000000@tec.mx",
        campus: "CCM",
        semester: "7"
    },
    {
        actions: <Cancel
            sx={{
                color: theme.color.errors.base,
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        />,
        id: "A0000001",
        name: "Sofía",
        email: "A0000001@tec.mx",
        campus: "CCM",
        semester: "7"
    },
    {
        actions: <Cancel
            sx={{
                color: theme.color.errors.base,
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        />,
        id: "A0000002",
        name: "Emiliano",
        email: "A0000002@tec.mx",
        campus: "CCM",
        semester: "7"
    },
    {
        actions: <Cancel
            sx={{
                color: theme.color.errors.base,
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        />,
        id: "A0000003",
        name: "Alfonso",
        email: "A0000003@tec.mx",
        campus: "CCM",
        semester: "7"
    },
];

const EditTeam = () => {
    const [open, setOpen] = React.useState(false);
    const [teamName, setTeamName] = React.useState('Equipo X');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeamName(event.target.value);
    }

    return (
        <div>
            <Edit
                sx={{
                    width: "46px",
                    height: "46px",
                    ":hover": {
                        cursor: "pointer",
                        color: theme.color.mainBlue,
                    },
                }}
                onClick={handleOpen}
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CrossContainer>
                            <Close
                                onClick={handleClose}
                            />
                        </CrossContainer>
                        <ModalHeader>Editar equipo</ModalHeader>
                        <CustomInputLabel>Nombre del equipo</CustomInputLabel>
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
                            onChange={handleTeamName}
                        // onBlur={}
                        // error={}
                        // helperText={}
                        />
                        <CustomInputLabel>Participantes actuales</CustomInputLabel>
                        <TeamTable
                            columns={teamTableCols}
                            rows={teamMembers}
                        />
                        <ButtonContainer>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "200px",
                                    borderRadius: "10px",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    backgroundColor: theme.color.mainBlue,
                                    color: theme.color.white,
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#114880",
                                    },
                                }}
                            // onClick={}
                            // disabled={}
                            >
                                Guardar cambios
                            </Button>
                        </ButtonContainer>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default EditTeam