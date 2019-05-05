import React, { Component } from "react";
import { Menu, Header, Icon } from "semantic-ui-react";

export default class MainMenu extends Component {
    render() {
        return (
            <Menu fluid inverted fixed="top">
                <Menu.Item header>
                    <Header as="h3" inverted>
                        🚀 Rocket Json Parser
                    </Header>
                </Menu.Item>
                <Menu.Menu position="right">
                   <a href="https://github.com/venkatshukla/jsonparser"> <Menu.Item name="github" icon="github" /> </a>
                </Menu.Menu>
            </Menu>
        );
    }
}
