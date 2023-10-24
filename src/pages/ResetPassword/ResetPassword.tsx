import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { Dialog, DialogContent, DialogTitle, List, ListItem, Typography } from "@mui/material";
import "./ResetPassword.css";
import { ResetPasswordData, resetPassword, verifyToken } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PASSWORD_VALIDATORS } from "../../models/Constants";

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { token } = useParams();

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [validToken, setValidToken] = useState<boolean>(false);
  // Validar el token
  // Si el token es válido, mostrar el formulario
  // Si el token no es válido, mostrar un mensaje de error
  useEffect(() => {
    verifyToken(token as string)
      .then((_) => {
        setValidToken(true);
      })
      .catch((error) => {
        setValidToken(false);
        setError(error.response.data.message);
      });
  }, [token])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const hasUpperCase = PASSWORD_VALIDATORS.hasUpperCase(formData.password);
    const hasSpecialChar = PASSWORD_VALIDATORS.hasSpecialChar(formData.password);
    const hasNumber = PASSWORD_VALIDATORS.hasNumber(formData.password);


    if (formData.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (!hasUpperCase) {
      setError("La contraseña debe contener al menos una letra mayúscula.");
      return;
    }

    if (!hasSpecialChar) {
      setError("La contraseña debe contener al menos un carácter especial.");
      return;
    }

    if (!hasNumber) {
      setError("La contraseña debe contener al menos un número.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError('');

    resetPassword({
      token: token,
      password: formData.password,
    } as ResetPasswordData)
      .then((_) => {
        toast.success("Contraseña restablecida exitosamente", {
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const errorDialog = () => {
    const error = "El token no es válido o ha expirado.";
    return (
      <Dialog open={true}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>{error}</DialogContent>
        <Button onClick={() => navigate("/forgot-password")}>Aceptar</Button>
      </Dialog>
    )
  }

  if (!validToken) {
    return errorDialog()
  }
  return (
    <Grid container spacing={2} className="Registro">
      <ToastContainer />
      <Grid item xs={12} sm={6} justifyContent={"center"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="/Diseño Registro.png" alt="Tu imagen" className="imagen-registro" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className="form-container" sx={{ textAlign: "center", height: "840px" }}>
          <div className="form-wrapper">
            <Typography component="div" sx={{ fontSize: "45px", fontStyle: "italic", fontWeight: "bold", marginBottom: '10px' }}>
              Recupera tu contraseña
            </Typography>
            <Typography component="div" sx={{ color: "#3B5998", fontWeight: "bold", marginBottom: '10px', fontSize: '45px' }}>
              HackMX
            </Typography>
            <Typography variant="body2" component="p" style={{ padding: '10px 40px 20px 60px', fontSize: '16px', marginTop: '30px', textAlign: "left" }}>
              Recupera tu contraseña ingresando una nueva y confírmala.
            </Typography>
            <Typography variant="h5">Parametros de contraseña</Typography>
            <List>
              <ListItem>Al menos 1 caracter especial</ListItem>
              <ListItem>Al menos 1 número</ListItem>
              <ListItem>Al menos 1 letra mayúscula</ListItem>
            </List>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                sx={{
                  maxWidth: "500px",
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "none",
                    color: "black",
                    height: "45px",
                    "& fieldset": {
                      borderColor: "orange",
                      borderWidth: "4px",
                      borderRadius: "50px",
                    },
                    "&:hover fieldset": {
                      borderColor: "orange",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "orange",
                    },
                  },
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                sx={{
                  maxWidth: "500px",
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "none",
                    color: "black",
                    height: "45px",
                    "& fieldset": {
                      borderColor: "orange",
                      borderWidth: "4px",
                      borderRadius: "50px",
                    },
                    "&:hover fieldset": {
                      borderColor: "orange",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "orange",
                    },
                  },
                }}
              />
              {error && (
                <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                  {error}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem", marginBottom: "5rem" }}>
                <Button type="submit" variant="contained" className="custom-button">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
