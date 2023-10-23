import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./ResetPassword.css";
import { resetPassword } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
    const [formData, setFormData] = useState({
      password: "",
      confirmPassword: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null); 
  
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
      
        const hasUpperCase = /[A-Z]/.test(formData.password);
        const hasSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(formData.password);
        const hasNumber = /[0-9]/.test(formData.password);

      
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
      
        resetPassword(formData)
          .then((response) => {
            toast.success("Contraseña restablecida exitosamente");
            navigate("/sign-in");
          })
          .catch((error) => {
            setError("Error al restablecer la contraseña");
          });
      }
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
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
              Hackfest 2.0
            </Typography>
            <Typography variant="body2" component="p" style={{ padding: '10px 40px 20px 60px', fontSize: '16px', marginTop: '30px', textAlign: "left" }}>
              Recupera tu contraseña ingresando una nueva y confírmala.
            </Typography>
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
            <Box sx={{ fontFamily: "Poppins", marginBottom: "2rem" }}>
              <p style={{ margin: 0 }}>¿Has olvidado tus datos de inicio de sesión?</p>
              <Link to="/forgot-password" className="forgot-password-link" style={{ fontWeight: "bold", textDecorationLine: "none", color: "orange " }}>
                Obtén ayuda
              </Link>
            </Box>
            <Box sx={{ fontFamily: "Poppins" }}>
              <span style={{ marginRight: "1rem" }}>¿Aún no tienes cuenta?</span>
              <Link to="/registro" className="register-link" style={{ fontWeight: "bold", textDecorationLine: "none", color: "orange " }}>
                Regístrate
              </Link>
            </Box>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
