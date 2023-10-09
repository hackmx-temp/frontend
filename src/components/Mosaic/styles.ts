import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.mainBlue};
  font-family: ${theme.typography.fontFamily};
`;

export const Header = styled.h2`
  font-weight: 300;
  font-size: 3.5rem;
  margin: 20px 0;
  text-align: center;
  color: ${theme.color.white};

  @media (max-width: 768px) {
    font-size: 2.5rem;
}
`;

export const ArrowButton = styled.button<{ left?: boolean; right?: boolean }>`
position: absolute;
top: 50%;
z-index: 1;
transform: translateY(-50%);
background: none;
border: none;
cursor: pointer;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
color: #000;
font-size: 24px;
transition: opacity 0.3s;
opacity: 1;

${({ left }) => left && css`
  left: 20px;
`}
${({ right }) => right && css`
  right: 20px;
`}

&:hover {
  opacity: 1;
}
`;