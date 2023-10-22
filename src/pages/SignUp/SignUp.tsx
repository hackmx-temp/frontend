import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import "./SignUp.css"; // You can style this component by defining your CSS in this file
import { Typography } from "@mui/material";
import { RegisteredUser, signUpUser } from "../../models/User";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorDialog, setErrorDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState("");
  const [dialogStatus, setDialogStatus] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password,
    };

    signUpUser(user)
      .then((response) => {
        const user = response.data;
        var id = String(user.id);
        console.log(response.data);
        const MENSAJE_EXITOSO =
          "¡Ya eres parte del HackMX! <br>Tu ID es: " + id;
        const LINK_WHATSAPP =
          "<br>Unete al grupo de <a target='_blank' href='https://goo.su/xJUy'>whatsapp</a><br>¡Te esperamos este 27 de octubre!";
        const SELECCION_EQUIPOS =
          "<br>Espera la fecha para la formación de equipos";
        setErrorDialog(false);
        setMessageDialog(MENSAJE_EXITOSO + LINK_WHATSAPP + SELECCION_EQUIPOS);
      })
      .catch((error) => {
        if (error.response) {
          // Handle server-side errors
          if (error.response.status === 500) {
            // Display the validation error message to the user
            setErrorDialog(true);
            setMessageDialog(
              "Validation error: " + error.response.data.message
            );
            console.log(user)
          } else {
            // Handle other server errors
            setErrorDialog(true);
            setMessageDialog(
              "An error occurred while processing your request."
            );
          }
        } else {
          // Handle network or other errors
          setErrorDialog(true);
          setMessageDialog("An error occurred. Please try again later.");
        }
      });
    setDialogStatus(true);
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <Box
          className="form-container"
          sx={{ textAlign: "center", height: "840px" }}
        >
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
                value={formData.email}
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
                name="password"
                label="Contraseña"
                type="password"
                id="password"
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
                  Enviar
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
                ¿Aun no tienes cuenta?
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

export default SignUp;
