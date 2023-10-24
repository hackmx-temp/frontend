import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import "./SignUp.css"; // You can style this component by defining your CSS in this file

import { RegisteredUser, signUpUser } from "../../models/User";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSuccess = (token: string) => {
    // Save the token to local storage for maintaining the login session
    localStorage.setItem("token", JSON.stringify(token));
    toast.success("Registro exitoso", {
      autoClose: 1000, // Set a custom timeout of 3 seconds (3000 milliseconds)
    });
    setTimeout(() => {
      navigate("/usuario/equipos");

      // Show the toast after navigation
    }, 2000);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    signUpUser(user)
      .then((response) => {
        const user = response.data;
        var id = String(user.id);
        console.log(response.data);
        const token = response.data; // Assuming your response has a token
        console.log(token);
        handleSuccess(token); // Handle the success response

        return;
      })
      .catch((error) => {
        toast.error("Registro fallido"); // Display error message
      });
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
        <Box
          className="form-container"
          sx={{ textAlign: "center", height: "840px" }}
        >
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
                Regístrate a
              </span>{" "}
              <span style={{ color: "#3B5998", fontWeight: "bold" }}>
                HackMX5
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
                <div
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {error}
                </div>
              )}
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
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
