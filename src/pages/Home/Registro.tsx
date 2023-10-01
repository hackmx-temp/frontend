import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Autocomplete, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@mui/material';
import './Registro.css';
import { User, createUser, defaultCreateUser } from '../../models/User';
import { Link } from 'react-router-dom';

interface FormData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  telefono: string;
  genero: string;
  universidad: string;
  campus: string;
  carrera: string;
  matricula: string;
  necesitaAutobus1: string;
  semestre: string;
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
    universidad: '',
    carrera: '',
    matricula: '',
    campus: '',
    necesitaAutobus1: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const genderOptions = ["Hombre", "Mujer", "No binario", "Prefiero no decir"];
  const universidadOptions = ["Tecnológico de Monterrey", "Otro"];
  const campusOptions = ["CCM", "CSF", "CEM", "Toluca"]
  const carreraOptions = [
    "ARQ", "LUB", "LEC", "LRI", "LED", "LTP", "LC", "LEI", "LPE", "LAD", "LDI", "LLE", "LTM", "IDM", "INA", "IAL", "IDS", "IRS", "ITD", "IE", "IIS", "IFI", "IAG", "IBT", "IQ", "IC", "ITC", "IID", "IM", "IMD", "IMT", "LAE", "LCPF", "LDO", "LIN", "LAF", "LDE", "LEM", "LIT", "LBC", "LPS", "MO", "LNB", "MC"
  ];
  const semestreOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const necesitaAu1Options = ["Si", "No"];
  const [showMatriculaCarrera, setShowMatriculaCarrera] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [showOtroMessage, setShowOtroMessage] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'universidad') {
      setShowMatriculaCarrera(value === 'Tecnológico de Monterrey');
      setShowOtroMessage(value === 'Otro');
      if (value === 'Otro') {
        setFormData({ ...formData, matricula: '', carrera: '', necesitaAutobus1: '' });

      }
    }

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
      universidad: null,
      carrera: null,
      matricula: null,
      necesitaAutobus1: null,
      campus: null,
      semestre: null,
    };

    if (!formData.nombre) {
      errors.nombre = 'Este campo es obligatorio';
    }

    if (!formData.semestre) {
      errors.semestre = 'Este campo es obligatorio';
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

    if (!formData.telefono) {
      errors.telefono = 'Este campo es obligatorio';
    }

    if (!formData.genero) {
      errors.genero = 'Este campo es obligatorio';
    }

    if (!formData.necesitaAutobus1) {
      errors.necesitaAutobus1 = 'Este campo es obligatorio';
    }

    if (!formData.universidad) {
      errors.universidad = 'Este campo es obligatorio';
    }

    if (formData.universidad === 'Tecnológico de Monterrey' && !formData.matricula) {
      errors.matricula = 'Este campo es obligatorio si eres comunidad Tec';
    }

    if (formData.universidad === 'Tecnológico de Monterrey' && !formData.campus) {
      errors.matricula = 'Este campo es obligatorio si eres comunidad Tec';
    }

    if (formData.universidad === 'Tecnológico de Monterrey' && !formData.carrera) {
      errors.carrera = 'Este campo es obligatorio si eres comunidad Tec';
    }

    if (formData.universidad === 'Tecnológico de Monterrey' && !formData.necesitaAutobus1) {
      errors.necesitaAutobus1 = 'Este campo es obligatorio si eres comunidad Tec';
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
    universidad: null,
    carrera: null,
    matricula: null,
    necesitaAutobus1: null,
    campus: null,
    semestre: null,
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
        password: generatePass(),
        phone_number: formData.telefono,
        university: formData.universidad,
        campus: formData.campus,
        career: formData.carrera,
        semester: formData.semestre,
        is_from_tec: formData.universidad === 'Tecnológico de Monterrey',
        gender: formData.genero,
        enrollment_id: formData.matricula
      }
      createUser(user).then((response) => {
        if (response.status === 201) {
          const user = response.data;
          var id: string = String(user.id);
          console.log("ID length: " + id.length)
          if (id.length === 1) {
            id = '00' + id;
          } else if (id.length === 2) {
            id = '0' + id;
          }
          console.log(id);
          setErrorDialog(false);
          setMessageDialog('Tu ID es: ' + id);
        } else {
          setErrorDialog(true);
          console.log(response.data)
          setMessageDialog('Hubo un error: ' + response.data);
        }
      }).catch((error) => {
        setErrorDialog(true);
        setMessageDialog("Error no definido: " + error.message);
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
          {field.id === 'universidad' && showOtroMessage && (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                marginTop: '10px',
                color: '#b81414',
                fontWeight: 'bold',
                marginLeft: '20px'
              }}
            >
              <span style={{ marginLeft: 'auto' }}> Por el momento solo alumnos del TEC</span>
            </Typography>
          )}
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
              {...params}
              label={field.label}
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
  function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 10; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);

      pass += str.charAt(char)
    }

    return pass;
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
      id: 'universidad',
      label: 'Universidad',
      placeholder: 'Universidad',
      required: true,
      type: 'select',
      options: universidadOptions,
    },
    {
      id: 'campus',
      label: 'Campus',
      placeholder: 'Campus',
      required: true,
      type: 'select',
      options: campusOptions,
      hidden: !showMatriculaCarrera,
    },
    {
      id: 'carrera',
      label: 'Carrera',
      placeholder: 'Carrera',
      required: true,
      type: 'select',
      showOnValue: 'Tecnológico de Monterrey',
      options: carreraOptions,
      hidden: !showMatriculaCarrera,
    },
    {
      id: 'matricula',
      label: 'Matrícula',
      placeholder: 'Matrícula',
      required: false,
      showOnValue: 'Tecnológico de Monterrey',
      hidden: !showMatriculaCarrera,
    },
    {
      id: 'necesitaAutobus1',
      label: '¿Necesitas autobús?',
      placeholder: '¿Necesitas autobús?',
      required: true,
      type: 'select',
      showOnValue: 'Tecnológico de Monterrey',
      options: necesitaAu1Options,
      hidden: !showMatriculaCarrera,
    },
  ];

  const dialog = () => {
    return (
      <Dialog
        open={dialogStatus}
        onClose={() => setDialogStatus(false)}
      >
        <DialogTitle id="alert-dialog-title">
          {errorDialog ? 'Error' : 'Registro exitoso'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {messageDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={errorDialog ? '#' : '/'}>
            <Button onClick={() => setDialogStatus(false)} autoFocus>
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
          <Card className="form-container">
            <CardContent>
              <Typography gutterBottom variant="h2" sx={{ textAlign: 'center', marginBottom: '46px', marginTop: '20px', fontSize: '58px' }}>
                <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Registrate</span>{' '}
                <span style={{ fontWeight: 'bold' }}>para</span>{' '}
                <span style={{ color: '#3B5998', fontWeight: 'bold' }}>HackMX 5</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: '15px', color: 'black' }}>
                Tus datos serán usados sin fines de lucro y de forma segura. El formulario estará abierto hasta el 25 de septiembre a las 11:59 pm. ¡No te quedes fuera!
              </Typography>
              <form onSubmit={handleSubmit}>
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
                    Acepto los{' '}
                    <a href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey">
                      Términos y Condiciones
                    </a>
                  </span>
                </div>
                <p style={{ color: '#b81414', fontSize: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', }}>Selecciona los términos y condiciones antes de enviarlo</p>

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

              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {dialogStatus ? dialog() : null}
    </div>
  );
}

export default Registro;