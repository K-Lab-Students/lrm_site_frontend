import React from "react";

import { Grid, Container } from "@mantine/core";

const MainBody = () => {
    return (
        <Grid gutter={40}>
            <Grid.Col span={4}>
                <Container>
                    abc
                </Container>
            </Grid.Col>

            <Grid.Col span={4}>
                <Container>
                    abc
                </Container>
            </Grid.Col>

            <Grid.Col span={4}>
                <Container>
                    abc
                </Container>
            </Grid.Col>
        </Grid>
    )
}

export default MainBody