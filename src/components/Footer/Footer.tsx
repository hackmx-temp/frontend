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
} from "./styles";

import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/hackMX.png";

/**
 * Footer for all pages in the project. Does not receive any arguments.
 */

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterUpperContainer>
          <FooterLogoImgContainer>
            <FooterLogoImg src={Logo} />
          </FooterLogoImgContainer>

          <FooterLinkWrapper>
            <FooterLinkContainer>
              <FooterLink onClick={() => navigate("/register")}>
                Registrate
              </FooterLink>
              <FooterLink>Políticas de privacidad</FooterLink>
            </FooterLinkContainer>
          </FooterLinkWrapper>
        </FooterUpperContainer>

        <FooterBelowContainer>
          <FooterDivider />
          <FooterCopyrightContainer>
            <FooterCopyrightIcon>
              <CopyrightIcon sx={{ fontSize: 15 }} />
            </FooterCopyrightIcon>
            <FooterCopyrightText>
              &nbsp;2023 HackMX. All rights reserved.
            </FooterCopyrightText>
          </FooterCopyrightContainer>
        </FooterBelowContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
