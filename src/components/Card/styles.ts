import styled from "styled-components";

export const CardContainer = styled.div<{ width?: string; height?: string }>`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease;
    padding: 1rem;

    &:hover {
        box-shadow: 0 8px 6px rgba(0, 0, 0, 0.2);
    }
    `;

export const CardHeader = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    text-align: center;
`;

export const CardImageContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const CardImage = styled.img`
    width: 50%;
    height: auto;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    object-fit: cover;
`;