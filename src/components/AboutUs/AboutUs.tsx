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
            Bienvenido al HackMx5, el epicentro de la innovación y la
            creatividad tecnológica en la Región CDMX. Organizado con pasión por
            el Departamento de Computación del Tecnológico de Monterrey, este
            evento engloba la colaboración y talento de nuestros campus en Santa
            Fe, Ciudad de México, Estado de México y Toluca.
          </p>
          <p>
            HackMx5 no es sólo un evento, es una experiencia de 24 horas donde
            brillantes mentes, denominadas "hackers", unen fuerzas y habilidades
            en áreas como programación, diseño, marketing, emprendimiento y
            muchas más. El objetivo: enfrentar desafíos reales y actuales
            presentados por nuestros distinguidos patrocinadores y desarrollar
            soluciones innovadoras. Ya sea a través de prototipos de software,
            hardware innovador, servicios web revolucionarios o cualquier
            solución creativa imaginable, los hackers tendrán la oportunidad de
            mostrar sus habilidades y obtener reconocimientos.
          </p>
          <p>
            ¿El giro? Cada patrocinador presenta un reto específico basado en
            una temática única. Esto permite a los equipos elegir el desafío que
            más les apasione y con el cual sientan que pueden hacer la
            diferencia. Al final del maratónico día, las soluciones serán
            evaluadas por un panel de jueces expertos y presentadas ante los
            mismos patrocinadores, buscando no sólo premiar el talento, sino
            también generar impacto real en los sectores involucrados.
          </p>
          <p>
            Te esperamos en las instalaciones del Campus Ciudad de México este
            próximo viernes 27 y sábado 28 de octubre, 2023. Sé parte de la
            innovación, sé parte de HackMx5.
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
