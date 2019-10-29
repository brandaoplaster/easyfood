import React from 'react';
import "./App.scss";
import {Container, Section} from 'rbx';
import Header from "./components/header";

const App = () => (
    <div>
        <Header>
            <Section>
                <Container>
                    Easy Food
                </Container>
            </Section>
        </Header>
    </div>
)

export default App;