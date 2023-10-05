import React from "react";
import { BigInfo } from "../BigInfo";
import { ButtonMui } from "../ButtonMui";
import theme from "../../theme/theme";
import { MainInfoDescription, MainInfoText, MainInfoTitle } from "./styles";
import AboutImage from "../../assets/question-women.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <BigInfo side="left" imgSrc={AboutImage} bgColor="#99BCDE">
        <MainInfoText>
          <MainInfoTitle>¿Qué es el HackMx 5?</MainInfoTitle>
          <MainInfoDescription>
            Es un evento de colaboración dónde participantes con habilidades en
            programación, emprendimiento, diseño, marketing y otras disciplinas
            trabajan en equipos durante un corto período de tiempo para
            desarrollar soluciones innovadoras para problemas específicos
            planteados por patrocinadores.
          </MainInfoDescription>
          <MainInfoDescription>
            Los participantes crean prototipos de software, hardware, servicios
            web u otras soluciones creativas e innovadoras que se presentan y
            evalúan al final del evento. Para cada reto, las mejores soluciones
            tienen la oportunidad de ganar premios ofrecidos por los
            patrocinadores.
          </MainInfoDescription>
        </MainInfoText>
      </BigInfo>
    </div>
  );
};

export default AboutUs;
