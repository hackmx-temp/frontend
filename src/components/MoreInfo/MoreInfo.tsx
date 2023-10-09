import React from 'react'
import { MainContainer } from './styles'
import { Container, Grid } from '@mui/material'
import { Chronogram } from '../Chronogram'
import { MapComponent } from '../MapComponent'

const MoreInfo = () => {
    return (
        <MainContainer>
            <Container
                style={{
                    // height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#e4caa5",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                            paddingLeft: "5rem",
                        }}
                    >
                        <Chronogram />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MapComponent />
                    </Grid>
                </Grid>
            </Container>
        </MainContainer>

    )
}

export default MoreInfo