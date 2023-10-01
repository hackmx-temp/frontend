import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import './Registro.css';

interface FormData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  telefono: string;
  genero: string;
  universidad: string;
  carrera: string;
  matricula: string;
  necesitaAutobus1: string;
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
    universidad: '',
    carrera: '',
    matricula: '',
    necesitaAutobus1: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const genderOptions = ["Hombre", "Mujer", "No binario", "Prefiero no decir", "Otro"];
  const universidadOptions = ["Tecnológico de Monterrey", "Otro"];
  const carreraOptions = [
    "ARQ", "LUB", "IC", "LEC", "LRI", "LED", "LTP", "LC", "LEI", "LPE", "LAD", "LDI", "LLE", "LTM", "IDM", "INA", "IAL", "IDS", "IRS", "ITD", "IE", "IIS", "IFI", "IAG", "IBT", "IQ", "ITC", "IC", "IID", "IM", "IMD", "IMT", "LAE", "LCPF", "LDO", "LIN", "LAF", "LDE", "LEM", "LIT", "LBC", "LPS", "MO", "LNB", "MC"
  ];
  const necesitaAu1Options = ["Si", "No"];
  const [showMatriculaCarrera, setShowMatriculaCarrera] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOtroMessage, setShowOtroMessage] = useState(false);

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
    };

    if (!formData.nombre) {
      errors.nombre = 'Este campo es obligatorio';
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
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      console.log('Formulario enviado:', formData);
      setShowSuccessPopup(true);
    }
  };

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
      type: 'select',
      options: genderOptions,
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
                <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Sign up</span>{' '}
                <span style={{ fontWeight: 'bold' }}>for</span>{' '}
                <span style={{ color: '#3B5998', fontWeight: 'bold' }}>Hackfest 2.0</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', fontSize: '15px', color: 'black' }}>
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar
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
                        field.type === 'select' ? (
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
                        ) : (
                          <TextField
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
                        )

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

                <p style={{ color: '#b81414', fontSize: '12px',fontWeight: 'bold', display: 'flex', justifyContent: 'center', }}>Selecciona los términos y condiciones antes de enviarlo</p>

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
      {showSuccessPopup && (
        <div className="success-popup">
          <Card className="popup-card">
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Registro exitoso
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ¡Gracias por registrarte! Tu formulario ha sido enviado con éxito.
              </Typography>
              <Button
                onClick={() => setShowSuccessPopup(false)}
                variant="contained"
                className="custom-button"
                style={{ marginTop: '20px' }}
              >
                Cerrar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Registro;





















































