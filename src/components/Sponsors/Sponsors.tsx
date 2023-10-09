import React from 'react'
import { Carousel } from '../Carousel'
import awsLogo from "../../assets/sponsors/aws.png";
import dacompassLogo from "../../assets/sponsors/dacompass.png";
import liverpoolLogo from "../../assets/sponsors/liverpool.png";
import { Header, Wrapper } from './styles';

const Sponsors = () => {
    return (
        <Wrapper>
            <Header>Conoce a nuestros patrocinadores</Header>
            <Carousel
                clients={[
                    {
                        src: awsLogo,
                        alt: "AWS",
                        client: "Client 1",
                    },
                    {
                        src: dacompassLogo,
                        alt: "Dacompass",
                        client: "Client 1",
                    },
                    {
                        src: liverpoolLogo,
                        alt: "Liverpool",
                        client: "Client 1",
                    },
                ]}
                width="100%"
                imageWidth="150px"
            />
        </Wrapper>
    )
}

export default Sponsors