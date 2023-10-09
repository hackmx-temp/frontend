import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div<{ isVisible: boolean }>`
opacity: ${(props) => (props.isVisible ? 1 : 0)};
transform: translateY(${(props) => (props.isVisible ? 0 : '40px')});
transition: opacity 1.3s ease-in-out, transform 1.3s ease-in-out;
    width: 100%;
    height: auto;
    background-color: ${theme.color.white};
`;

export const Header = styled.h2`
    font-weight: 300;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${theme.color.mainBlue};

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;