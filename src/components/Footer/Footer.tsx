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
} from "./styles";

import CopyrightIcon from "@mui/icons-material/Copyright";
import HackMx from "../../assets/hackmx-logo.png";
import React, { useEffect } from "react";
import { Grid, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
// import { ROUTES } from "../../routes/constants";
import { FooterProps } from "./types";
import theme from "../../theme/theme";

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
          <LogoContainer onClick={() => navigate("/register")}>
            <FooterLogoImgContainer>
              <FooterLogoImg src={HackMx} />
            </FooterLogoImgContainer>
          </LogoContainer>

          <FooterLinkWrapper>
            <FooterLinkContainer>
              <>
                  <FooterLink onClick={() => navigate(`${""}`)}>Inicio</FooterLink>
                  <FooterLink onClick={() => navigate(`${""}`)}>Registro</FooterLink>
              </>
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
                        color: theme.color.facebook,
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: theme.color.facebook,
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                    href="https://www.facebook.com/TecHackMx" target="_blank"
                  >
                    <Facebook sx={{ fontSize: 36, color: theme.color.grays.d1 }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: theme.color.instagram,
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: theme.color.instagram,
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                    style={{ marginTop: "10px" }}
                  >
                    <Instagram sx={{ fontSize: 36, color: theme.color.grays.d1 }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <FooterCopyrightContainer>
                  <FooterCopyrightIcon>
                    <CopyrightIcon sx={{ fontSize: 15 }} />
                  </FooterCopyrightIcon>
                  <FooterCopyrightText>
                    &nbsp; 2023 HackMx All rights reserved.
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
                      &nbsp;2023 HackMx all rights reserved.
                    </FooterCopyrightText>
                  </FooterCopyrightContainer>
                </Grid>

                <Grid item>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: theme.color.facebook,
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: theme.color.facebook,
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                    href="https://www.facebook.com/TecHackMx" target="_blank"
                  >
                    <Facebook sx={{ fontSize: 30, color: theme.color.grays.d1 }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: theme.color.instagram,
                        transition: "color 0.4s ease-in-out",
                        opacity: 0.7,
                        svg: {
                          color: theme.color.instagram,
                          transition: "color 0.4s ease-in-out",
                        },
                      },
                    }}
                  >
                    <Instagram sx={{ fontSize: 30, color: theme.color.grays.d1 }} />
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