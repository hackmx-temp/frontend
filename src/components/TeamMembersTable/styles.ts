import styled from "styled-components";
import theme from "../../theme/theme";

export const CustomCellLabel = styled.td`
    font-weight: 600;
    font-size: 1.1rem;
    color: ${theme.color.black};
    text-align: center;
    padding: 1rem;
`;

export const CustomRow = styled.tr`
    &:hover {
        cursor: pointer;
        background-color: ${theme.color.grays.l4};
    }
`;

export const CustomCell = styled.td`
    font-weight: 300;
    font-size: 1.1rem;
    color: ${theme.color.black};
    text-align: center;
    padding: 1rem;
`;