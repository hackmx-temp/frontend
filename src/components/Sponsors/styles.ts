import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div`
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
`;