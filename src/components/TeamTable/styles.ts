import styled from "styled-components";
import theme from "../../theme/theme";

export const CustomCellLabel = styled.td`
    font-weight: 600;
    font-size: 20px;
    color: ${theme.color.black};
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid ${theme.color.grays.l2};
`;

export const CustomRow = styled.tr`
    &:hover {
        background-color: ${theme.color.grays.l4};
    }
`;

export const CustomCell = styled.td`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.color.black};
    text-align: center;
    padding: 10px;
`;