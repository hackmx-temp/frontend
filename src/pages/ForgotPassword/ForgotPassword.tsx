import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import "./ForgotPassword.css"; // Define tus estilos en este archivo
import { Typography } from "@mui/material";
import { sendEmail } from "../../models/User";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get("email");
    sendEmail(email as string).then((res) => {
      toast.success(res.data.message, {
        autoClose: 2000, // Set a custom timeout of 3 seconds (3000 milliseconds)
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }).catch((err) => {
      toast.error(err.response.data.message)
    });
  };

  return (
    <Grid container spacing={2} className="Registro">
      <ToastContainer />
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
          {/* Columna derecha con el formulario de inicio de sesión */}
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
              <Typography
                component="div"
                sx={{
                  fontSize: "45px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginBottom: '10px',
                }}
              >
                Olvidaste tu contraseña
              </Typography>{" "}
              <Typography
                component="div"
                sx={{
                  color: "#3B5998",
                  fontWeight: "bold",
                  marginBottom: '10px',
                  fontSize: '45px',
                }}
              >
                HackMX5
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{
                  padding: '10px 40px 20px 60px',
                  fontSize: '16px',
                  marginTop: '30px',
                  textAlign: "left",
                }}
              >
                Podemos ayudarte a cambiar tu contraseña mediante la dirección de correo electrónico
              </Typography>
            </Typography>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', marginRight: '10px', padding: '30px 40px 20px 30px' }}>Correo</span>

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label=""
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
              </div>
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
                  Recuperar
                </Button>
              </div>
            </form>
            <hr style={{ borderColor: '#9DB4D0', borderWidth: '1px', width: '80%', margin: '10px auto 40px auto' }} />
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
                  color: "orange",
                }}
              >
                Regístrate
              </Link>
            </Box>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
