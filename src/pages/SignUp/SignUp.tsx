import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

import "./SignUp.css";

function SignUp() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [openDialog, setOpenDialog] = useState(false);

    const validatePassword = (password: string): string => {
        if (password.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres.";
        }
        if (!/[A-Z]/.test(password)) {
            return "La contraseña debe contener al menos una letra mayúscula.";
        }
        if (!/[a-z]/.test(password)) {
            return "La contraseña debe contener al menos una letra minúscula.";
        }
        if (!/\d/.test(password)) {
            return "La contraseña debe contener al menos un numeral.";
        }
        if (!/[@$!%*?&#]/.test(password)) {
            return "La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &, #).";
        }
        return "";
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        const validationResult = validatePassword(password);
        if (validationResult !== "") {
            setError(validationResult);
            return;
        }
        setError(""); // Reset error message

        // TODO: Aquí puedes continuar con el proceso de registro.
        
        // Muestra el diálogo
        setOpenDialog(true);
    };

    const renderDialog = () => {
        return (
          <Dialog 
          open={openDialog} 
          onClose={() => setOpenDialog(false)} 
          className="success-popup"
      >
          <div className="popup-card">
              <DialogTitle>Registro Exitoso</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Te has registrado correctamente.
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button 
                      onClick={() => setOpenDialog(false)} 
                      color="primary"
                      className="popup-card button"
                  >
                      Aceptar
                  </Button>
              </DialogActions>
          </div>
      </Dialog>
        );
    };

    return (
        <Grid container spacing={2} className="Registro">
            <Grid
                item
                xs={12}
                sm={6}
                justifyContent={"center"}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src="/Diseño Registro.png"
                    alt="Tu imagen"
                    className="imagen-registro"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box className="form-container" sx={{ textAlign: "center", height: "840px" }}>
                    <div className="form-wrapper">
                        <Typography
                            gutterBottom
                            overflow="hidden"
                            sx={{
                                typography: { sm: "h2", xs: "h5" },
                                textAlign: "center",
                                marginTop: "20px",
                                marginBottom: "5rem",
                            }}
                        >
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                                Sign Up for
                            </span>{" "}
                            <span style={{ color: "#3B5998", fontWeight: "bold" }}>
                                Hackfest 2.0
                            </span>
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo"
                                name="email"
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
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            
                            {error && <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</div>}
                            
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "5rem",
                                    marginBottom: "5rem",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="custom-button"
                                >
                                    Entrar
                                </Button>
                            </div>
                        </form>
                        <Box sx={{ fontFamily: "Poppins", marginBottom: "2rem" }}>
                            <p style={{ margin: 0 }}>
                                ¿Has olvidado tus datos de inicio de sesión?
                            </p>
                            <Link
                                to="/forgot-password"
                                className="forgot-password-link"
                                style={{
                                    fontWeight: "bold",
                                    textDecorationLine: "none",
                                    color: "orange ",
                                }}
                            >
                                Obtén ayuda
                            </Link>
                        </Box>
                        <Box sx={{ fontFamily: "Poppins" }}>
                            <span style={{ marginRight: "1rem" }}>
                                ¿Aún no tienes cuenta?
                            </span>
                            <Link
                                to="/registro"
                                className="register-link"
                                style={{
                                    fontWeight: "bold",
                                    textDecorationLine: "none",
                                    color: "orange ",
                                }}
                            >
                                Regístrate
                            </Link>
                        </Box>
                    </div>
                </Box>
            </Grid>

            {renderDialog()} 
        </Grid>
    );
}

export default SignUp;

