import { Box } from '@mui/material';
import styled from 'styled-components';

export const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    background-color: #fff;
    box-shadow: 24px;
    border-radius: 20px;
    padding: 2rem;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    @media (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

export const ClientTitle = styled.h1`
    font-size: 26px;
    font-weight: 600;
    margin: 0;
    color: #000;
`;

export const ClientText = styled.p<{width?: string}>`
    margin-top: 0px;
    margin-right: 20px;
    width: ${({width}) => (width ? width : "50%")}
    line-height: 35px;
    @media (max-width: 1024px) {
        width: 100%;
        margin-right: 0px;
        line-height: 30px;
    }
`;