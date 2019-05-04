import React, { Component } from "react";
import { Menu, Header } from "semantic-ui-react";

export default class MainMenu extends Component {
    render() {
        return (
            <Menu fluid inverted fixed="top">
                <Menu.Item header>
                    <Header as="h3" inverted>
                    🚀 Rocket Json Parser
                        </Header>
                </Menu.Item>
                <Menu.Menu position="right" />
            </Menu>
        );
    }
}
