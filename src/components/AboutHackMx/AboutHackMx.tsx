import React, { useState, useEffect, useRef } from 'react'
import { CustomText } from '../CustomText'
import theme from '../../theme/theme'
import { BasicContainer, CardsWrapper, Header, SmallHeader, Wrapper } from './styles'
import { Card } from '../Card'
import hackathon from '../../Assets/cardImages/hackathon.png'
import goal from '../../Assets/cardImages/goal.png'
import idea from '../../Assets/cardImages/idea.png'

const AboutHackMx = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const welcomeWrapper = useRef<HTMLDivElement | null>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const detailsWrapper = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (welcomeWrapper.current) {
        const rect = welcomeWrapper.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          if (!isWelcomeVisible) {
            setIsWelcomeVisible(true);
          }
        } else {
          if (rect.bottom < 0 || rect.top > viewportHeight) {
            setIsWelcomeVisible(false);
          }
        }
      } 
      
      if (detailsWrapper.current) {
        const rect = detailsWrapper.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          if (!isDetailsVisible) {
            setIsDetailsVisible(true);
          }
        } else {
          if (rect.bottom < 0 || rect.top > viewportHeight) {
            setIsDetailsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isWelcomeVisible, isDetailsVisible]);

  return (
    <div>
      <Wrapper ref={welcomeWrapper} isVisible={isWelcomeVisible}>
        <BasicContainer>
          <Header>¡Bienvenidx a HackMx!</Header>
          <CustomText
            content={`
          [HackMx], el epicentro de la innovación y la creatividad tecnológica en la [Región CDMX], organizado por alumnos y con el apoyo Departamento de Computación del Tecnológico de Monterrey.
          
          Este evento engloba la colaboración y talento de nuestros campus en [Santa Fe, Ciudad de México, Estado de México y Toluca].`}
            alignment='center'
            color={theme.color.mainOrange}
          />
          <p>
          </p>
        </BasicContainer>
      </Wrapper>
      {/* <Wrapper ref={detailsWrapper} isVisible={isDetailsVisible}> */}
      <Wrapper ref={detailsWrapper} isVisible={isDetailsVisible}>
        <Header>Acerca de HackMx</Header>
        <CardsWrapper>
          <Card
            title="¿Qué es?"
            description={`
            HackMx5 no es sólo un [evento], es una [experiencia] de 24 horas donde brillantes mentes unen fuerzas y habilidades en áreas como [programación, diseño, marketing, emprendimiento y muchas más].
            `}
            image={hackathon}
            accentColor={theme.color.mainOrange}
          />
          <Card
            title="Objetivo"
            description={`
            Enfrentar [desafíos reales y actuales] presentados por nuestros distinguidos [patrocinadores] y desarrollar [soluciones innovadoras].
            `}
            image={goal}
            accentColor={theme.color.mainOrange}
          />
          <Card
            title="¿Cómo funciona?"
            description={`
            Los participantes tendrán la oportunidad de mostrar sus habilidades y [obtener reconocimientos] creando prototipos de [software, hardware innovador, servicios web] revolucionarios o cualquier solución creativa.
            `}
            image={idea}
            accentColor={theme.color.mainOrange}
          />
        </CardsWrapper>
        <BasicContainer>
          <SmallHeader>¡Es momento de demostrar tu potencial!</SmallHeader>
          <CustomText
            content={`
          Te esperamos en las instalaciones del [Campus Ciudad de México] este próximo [viernes 27 y sábado 28 de octubre de 2023]. Sé parte de la innovación. Sé parte de HackMx5.
          `}
            color={theme.color.mainOrange}
            alignment='center'
          />
        </BasicContainer>
      </Wrapper>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default AboutHackMx
