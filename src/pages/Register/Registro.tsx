import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Autocomplete, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@mui/material';
import './Registro.css';
import { User, createUser, getCount } from '../../models/User';
import { Link } from 'react-router-dom';

interface FormData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  telefono: string;
  genero: string;
  campus: string;
  carrera: string;
  matricula: string;
  necesitaAutobus1: string;
  semestre: string;
  situacionmedica: string;
  alergias: string;
}

type FormField = {
  id: keyof FormData;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
  options?: string[];
  showOnValue?: string;
  hidden?: boolean;
};

function Registro() {
  const initialFormData: FormData = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    telefono: '',
    genero: '',
    semestre: '',
    carrera: '',
    matricula: '',
    campus: '',
    necesitaAutobus1: '',
    situacionmedica: '',
    alergias: ' ',
  };

  const [formData, setFormData] = useState(initialFormData);
  const genderOptions = ["Hombre", "Mujer", "No binario", "Prefiero no decir"];
  const campusOptions = ["CCM", "CSF", "CEM", "Toluca"]
  const carreraOptions = [
    "ARQ", "LUB", "LEC", "LRI", "LED", "LTP", "LC", "LEI", "LPE", "LAD", "LDI", "LLE", "LTM", "IDM", "INA", "IAL", "IDS", "IRS", "ITD", "IE", "IIS", "IFI", "IAG", "IBT", "IQ", "IC", "ITC", "IID", "IM", "IMD", "IMT", "LAE", "LCPF", "LDO", "LIN", "LAF", "LDE", "LEM", "LIT", "LBC", "LPS", "MO", "LNB", "MC"
  ];
  const semestreOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const necesitaAu1Options = ["Si", "No"];
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');
  const [countUsers, setCountUsers] = useState(0);
  const INTERVAL_MILISECONDS = 2000;
  const MATRICULA_REGEX = new RegExp('A0[0-9]{7}');
  const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  const TELEPHONE_REGEX = new RegExp('^[0-9]{10}$');

  // Fetch count users every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getCount().then((response) => {
        setCountUsers(response.data.count);
        if (response.data >= 200) {
          window.location.href = '/registro-cerrado';
        }
      }).catch((error) => {
        console.log("Cannot fetch count users");
      })
    }, INTERVAL_MILISECONDS);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;


    setFormData({ ...formData, [name]: value });
  };

  function validateFormData(formData: FormData): Record<keyof FormData, string | null> {
    const errors: Record<keyof FormData, string | null> = {
      nombre: null,
      apellidoPaterno: null,
      apellidoMaterno: null,
      correo: null,
      telefono: null,
      genero: null,
      carrera: null,
      matricula: null,
      necesitaAutobus1: null,
      campus: null,
      semestre: null,
      situacionmedica: null,
      alergias: null,
    };

    if (!formData.nombre) {
      errors.nombre = 'Este campo es obligatorio';
    }

    if (!formData.semestre) {
      errors.semestre = 'Este campo es obligatorio';
    }

    if (!MATRICULA_REGEX.test(formData.matricula)) {
      errors.matricula = 'Matrícula inválida';
    }

    if (!formData.apellidoPaterno) {
      errors.apellidoPaterno = 'Este campo es obligatorio';
    }

    if (!formData.apellidoMaterno) {
      errors.apellidoMaterno = 'Este campo es obligatorio';
    }

    if (!formData.correo) {
      errors.correo = 'Este campo es obligatorio';
    }

    if (!EMAIL_REGEX.test(formData.correo)) {
      errors.correo = 'Correo inválido';
    }

    if (!formData.telefono) {
      errors.telefono = 'Este campo es obligatorio';
    }

    if (!TELEPHONE_REGEX.test(formData.telefono)) {
      errors.telefono = 'Teléfono inválido';
    }

    if (!formData.genero) {
      errors.genero = 'Este campo es obligatorio';
    }

    if (!formData.necesitaAutobus1) {
      errors.necesitaAutobus1 = 'Este campo es obligatorio';
    }

    return errors;
  }

  const [errors, setErrors] = useState<Record<keyof FormData, string | null>>({
    nombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    correo: null,
    telefono: null,
    genero: null,
    carrera: null,
    matricula: null,
    necesitaAutobus1: null,
    campus: null,
    semestre: null,
    situacionmedica: null,
    alergias: null,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((error) => error !== null);

    if (!checked) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    if (!hasErrors) {
      const user: User = {
        name: formData.nombre,
        last_name: formData.apellidoPaterno + ' ' + formData.apellidoMaterno,
        email: formData.correo,
        phone_number: formData.telefono,
        campus: formData.campus,
        career: formData.carrera,
        semester: formData.semestre,
        gender: formData.genero,
        enrollment_id: formData.matricula,
        bus_required: formData.necesitaAutobus1.toLowerCase() === 'si' ? true : false,
        medical_conditions: formData.situacionmedica || 'none',
        allergies: formData.alergias || 'none',
      };

      createUser(user).then((response) => {
        const user = response.data;
        var id: string = String(user.id);
        if (id.length === 1) {
          id = '00' + id;
        } else if (id.length === 2) {
          id = '0' + id;
        }
        const MENSAJE_EXITOSO = "¡Ya eres parte del HackMX! <br>Tu ID es: " + id;
        const LINK_WHATSAPP = "<br>Unete al grupo de <a target='_blank' href='https://goo.su/xJUy'>whatsapp</a><br>¡Te esperamos este 27 de octubre!";
        const SELECCION_EQUIPOS = "<br>Espera la fecha para la formación de equipos";
        setErrorDialog(false);
        setMessageDialog(MENSAJE_EXITOSO + LINK_WHATSAPP + SELECCION_EQUIPOS);
      }).catch((error) => {
        if (error.response) {
          setErrorDialog(true);
          setMessageDialog(error.response.data.message);
        }
      });
      setDialogStatus(true);
    }
  };

  const renderFormField = (field: FormField) => {
    if (field.type === 'select') {
      return (
        <>
          <TextField
            select
            name={field.id}
            label={field.label}
            variant="outlined"
            fullWidth
            required={field.required}
            value={formData[field.id]}
            onChange={handleChange}
            error={Boolean(errors[field.id])}
            helperText={errors[field.id] || ''}
            sx={{
              maxWidth: '500px',
              '& .MuiInputLabel-root': {
                color: 'gray',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'none',
                color: 'black',
                height: '45px',
                '& fieldset': {
                  borderColor: 'orange',
                  borderWidth: '4px',
                  borderRadius: '50px',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'orange',
                },
              },
            }}
          >
            {field.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

        </>
      );
    }
    if (field.id === 'genero') {
      const helperGenderText = "Puedes escribir otro genero"
      return (
        <Autocomplete
          freeSolo
          value={formData[field.id]}
          onChange={(event, newValue) =>
            setFormData({ ...formData, [field.id]: newValue })
          }
          onInputChange={(event, newInputValue) => setFormData({ ...formData, [field.id]: newInputValue })}
          id={field.id}
          options={genderOptions}
          sx={{
            maxWidth: '500px',
            '& .MuiInputLabel-root': {
              color: 'gray',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'none',
              color: 'black',
              height: '45px',
              '& fieldset': {
                borderColor: 'orange',
                borderWidth: '4px',
                borderRadius: '50px',
              },
              '&:hover fieldset': {
                borderColor: 'orange',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'orange',
              },
            },
          }}
          renderInput={(params) =>
            <TextField
              required
              {...params}
              label={field.label}
              error={Boolean(errors[field.id])}
              helperText={errors[field.id] || helperGenderText} />}
        />
      )
    }
    return (<TextField
      name={field.id}
      placeholder={field.placeholder}
      label={field.label}
      variant="outlined"
      fullWidth
      required={field.required}
      value={formData[field.id]}
      onChange={handleChange}
      error={Boolean(errors[field.id])}
      helperText={errors[field.id] || ''}
      sx={{
        maxWidth: '500px',
        '& .MuiInputLabel-root': {
          color: 'gray',
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'none',
          color: 'black',
          height: '45px',
          '& fieldset': {
            borderColor: 'orange',
            borderWidth: '4px',
            borderRadius: '50px',
          },
          '&:hover fieldset': {
            borderColor: 'orange',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'orange',
          },
        },
      }}
    />
    );
  }


  const formFields: FormField[] = [
    { id: 'nombre', label: 'Nombre', placeholder: 'Nombre', required: true },
    { id: 'apellidoPaterno', label: 'Apellido paterno', placeholder: 'Apellido paterno', required: true },
    { id: 'apellidoMaterno', label: 'Apellido materno', placeholder: 'Apellido materno', required: true },
    { id: 'correo', label: 'Correo personal', placeholder: 'Correo personal', required: true },
    { id: 'telefono', label: 'Número telefónico', placeholder: 'Número telefónico', required: true },


    {
      id: 'genero',
      label: 'Género',
      placeholder: 'Género',
      required: true,
    },
    {
      id: 'semestre',
      label: 'Semestre',
      placeholder: 'Semestre',
      required: true,
      type: 'select',
      options: semestreOptions,
    },


    {
      id: 'campus',
      label: 'Campus',
      placeholder: 'Campus',
      required: true,
      type: 'select',
      options: campusOptions,
    },
    {
      id: 'carrera',
      label: 'Carrera',
      placeholder: 'Carrera',
      required: true,
      type: 'select',
      options: carreraOptions,
    },
    {
      id: 'matricula',
      label: 'Matrícula',
      placeholder: 'A0XXXXXXX',
      required: true,
    },
    {
      id: 'necesitaAutobus1',
      label: '¿Necesitas autobús?',
      placeholder: '¿Necesitas autobús?',
      required: true,
      type: 'select',
      options: necesitaAu1Options,
    },


    { id: 'alergias', label: 'Alergias', placeholder: '¿Alguna alergia?', required: false },
    { id: 'situacionmedica', label: 'Condición Médica', placeholder: 'Condición Médica', required: false },
  ];

  const dialog = () => {
    return (
      <Dialog
        open={dialogStatus}
        onClose={() => {
          window.location.href = errorDialog ? '#' : '/';
          setDialogStatus(false)
        }}
      >
        <DialogTitle id="alert-dialog-title" component="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {errorDialog ? 'Error' : 'Registro exitoso'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="textSecondary" sx={{ textAlign: 'center' }}>
            {errorDialog ?
              messageDialog :
              <div dangerouslySetInnerHTML={{ __html: messageDialog }} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Link to={errorDialog ? '#' : '/'}>
            <Button
              onClick={() => setDialogStatus(false)}
              autoFocus
              variant="contained"
              className="custom-button"
              style={{ marginTop: '20px' }}
            >
              Cerrar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <div className="Registro">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} justifyContent={'center'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/RegistroHackMX 1.png"
            alt="Tu imagen"
            className="imagen-registro"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="form-container">
            <Typography gutterBottom overflow='hidden' sx={{ typography: { sm: 'h2', xs: 'h5' }, textAlign: 'center', marginTop: '20px' }}>
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Regístrate</span>{' '}
              <span style={{ fontWeight: 'bold' }}>para</span>{' '}
              <span style={{ color: '#3B5998', fontWeight: 'bold' }}>HackMX 5</span>
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: '15px', color: 'black' }}>
              Tus datos serán usados sin fines de lucro y de forma segura. El formulario cerrará cuando contemos con 200 hackers. ¡No te quedes fuera!
            </Typography>
            <Typography variant='h6' textAlign='center'>
              Quedan {200 - countUsers} lugares
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <Grid container spacing={2} style={{ marginTop: '70px' }}>
                {formFields.map((field) => (
                  <Grid
                    key={field.id}
                    xs={12}
                    sm={6}
                    item
                    sx={{ paddingRight: '30px', marginBottom: '60px' }}
                  >
                    {field.hidden ? null : (
                      renderFormField(field)
                    )}

                  </Grid>

                ))}
              </Grid>
              <div style={{ marginBottom: '50px', marginLeft: '5px' }}>
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  color="primary"
                  name="terminosYCondiciones"
                />
                <span style={{ fontSize: '12px' }}>
                  He leido y acepto los términos del {' '}
                  <a href="https://tec.mx/es/aviso-privacidad-participantes-expositores-panelistas-conferencistas-moderadores">
                    AVISO DE PRIVACIDAD
                  </a>
                </span>
              </div>
              {!checked &&
                <p style={{ color: '#b81414', fontSize: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', }}>Selecciona los términos y condiciones antes de enviarlo</p>
              }
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '10%' }}>
                <Button
                  type="submit"
                  variant="contained"
                  className="custom-button"
                  disabled={!checked}
                >
                  Enviar
                </Button>
              </div>

              {showError && (
                <div className="error-message" style={{ color: 'black' }}>
                  Debes aceptar los Términos y Condiciones para continuar.
                </div>
              )}

            </Box>
          </Box>
        </Grid>
      </Grid>
      {dialog()}
    </div>
  );
}

export default Registro;

