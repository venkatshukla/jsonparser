import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const margin = {
    margin: "60px 0 0 0"
};
export default props => {
    return (
        <Container fluid>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
                />
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css" />
                <link rel="shortcut icon" href="../favicon.ico" />
                <title>🚀 Rocket Json Parser</title>
            </Head>

            <Grid.Row padded="vertically">
                <Header />
            </Grid.Row>
            <Grid.Row padded="vertically" style={margin}>
                {props.children}
            </Grid.Row>

            <Footer />
        </Container>
    );
};
