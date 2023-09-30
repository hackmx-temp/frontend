import {
  FooterBelowContainer,
  FooterContainer,
  FooterCopyrightContainer,
  FooterCopyrightIcon,
  FooterCopyrightText,
  FooterDivider,
  FooterLink,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLogoImg,
  FooterLogoImgContainer,
  FooterUpperContainer,
  FooterWrapper,
  LogoContainer,
  TextContainer,
  UPText,
} from "./styles";

import CopyrightIcon from "@mui/icons-material/Copyright";
import HubReserveLogo from "../../assets/hackmx-logo.png";
import React, { useEffect } from "react";
import { Grid, IconButton } from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
// import { ROUTES } from "../../routes/constants";
import { FooterProps } from "./types";

/**
 * Footer for all pages in the project. Does not receive any arguments.
 */

const Footer: React.FC<FooterProps> = ({
  variant = "",
}) => {
  // const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Siempre que cambie la ubicación, desplázate al inicio de la página
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterUpperContainer>
          <LogoContainer onClick={() => navigate("/")}>
            <FooterLogoImgContainer>
              <FooterLogoImg src={HubReserveLogo} />
            </FooterLogoImgContainer>
          </LogoContainer>

          <FooterLinkWrapper>
            <FooterLinkContainer>
              {variant === "" ? (
                <>
                  {/* <FooterLink onClick={() => navigate(`${ROUTES.RESERVE}`)}>Reservar </FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.FAVORITES}`)}>Favoritos</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.CALENDAR}`)}>Calendario</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.RESERVATIONS}`)}>Mis Reservaciones</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.PROFILE}`)}>Perfil</FooterLink> */}
                </>
              ) : variant === "admin" ? (
                <>
                  {/* <FooterLink onClick={() => navigate(`${ROUTES.ADMIN}${ROUTES.PANEL}`)}>Panel </FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.ADMIN}${ROUTES.ADMIN_RESERVATIONS}`)}>Reservaciones</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.ADMIN}${ROUTES.STATISTICS}`)}>Estadísticas</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.ADMIN}${ROUTES.USERS}`)}>Users</FooterLink>
                  <FooterLink onClick={() => navigate(`${ROUTES.ADMIN}${ROUTES.PROFILE}`)}>Perfil</FooterLink> */}
                </>
              ) : null}
            </FooterLinkContainer>
          </FooterLinkWrapper>
        </FooterUpperContainer>

        <FooterBelowContainer>
          <FooterDivider />
          {isMobile ? (
            <>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Grid item>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: "#fff",
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                    style={{ marginTop: "10px" }}
                  >
                    <Facebook sx={{ fontSize: 36, color: "#a0a2aa" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: "#fff",
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                    style={{ marginTop: "10px" }}
                  >
                    <LinkedIn sx={{ fontSize: 36, color: "#a0a2aa" }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <FooterCopyrightContainer>
                  <FooterCopyrightIcon>
                    <CopyrightIcon sx={{ fontSize: 15 }} />
                  </FooterCopyrightIcon>
                  <FooterCopyrightText>
                    &nbsp; 2023 Hub Reserve All rights reserved.
                  </FooterCopyrightText>
                </FooterCopyrightContainer>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                margin-top="1rem"
                spacing={1}
              >
                <Grid item>
                  <FooterCopyrightContainer>
                    <FooterCopyrightIcon>
                      <CopyrightIcon sx={{ fontSize: 15 }} />
                    </FooterCopyrightIcon>
                    <FooterCopyrightText>
                      &nbsp;© 2023 Hub Reserve All rights reserved.
                    </FooterCopyrightText>
                  </FooterCopyrightContainer>
                </Grid>

                <Grid item>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: "#fff",
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                  >
                    <Facebook sx={{ fontSize: 30, color: "#a0a2aa" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: "#fff",
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                  >
                    <LinkedIn sx={{ fontSize: 30, color: "#a0a2aa" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </>
          )}
        </FooterBelowContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;