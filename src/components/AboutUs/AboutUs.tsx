import React from "react";
import { BigInfo } from "../BigInfo";
import { ButtonMui } from "../ButtonMui";
import theme from "../../theme/theme";
import { MainInfoText, MainInfoTitle } from "./styles";

const AboutUs = () => {
  return (
    <div>
      <BigInfo side="left" imgSrc="logo-hack.jpeg" bgColor="#FA9507">
        <MainInfoText>
          <MainInfoTitle>Acerca de HackMX 5</MainInfoTitle>
          <p>
            HackMx5, organizado por el Departamento de Computación del
            Tecnológico de Monterrey en la Región CDMX, es un maratón de
            innovación de 24 horas. En este evento, talentosos "hackers" de
            áreas como programación, diseño y marketing colaboran para crear
            soluciones a desafíos presentados por nuestros patrocinadores. Cada
            desafío, único en su esencia, es una invitación para desarrollar
            prototipos innovadores y soluciones creativas que serán evaluadas
            por expertos y presentadas ante los mismos patrocinadores.
          </p>
          <p>
            Nos vemos el 27 y 28 de octubre de 2023 en el Campus Ciudad de
            México. ¡Únete al futuro con HackMx5!
          </p>
          <ButtonMui
            bgColor={theme.palette.primary.main}
            color="#D9D9D9"
            hoverColor={theme.palette.primary.dark}
          >
            ¡Registrate!
          </ButtonMui>
        </MainInfoText>
      </BigInfo>
    </div>
  );
};

export default AboutUs;
