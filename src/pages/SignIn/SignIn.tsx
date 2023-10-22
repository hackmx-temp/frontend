import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import "./SignIn.css"; // You can style this component by defining your CSS in this file
import { Typography } from "@mui/material";

function SignIn() {
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
          {/* Right column with the login form */}
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
                Sign In for
              </span>{" "}
              <span style={{ color: "#3B5998", fontWeight: "bold" }}>
                Hackfest 2.0
              </span>
            </Typography>
            <form>
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
    </Grid>
  );
}

export default SignIn;
