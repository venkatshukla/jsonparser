import React from "react";
import { Menu, Header } from "semantic-ui-react";

export default () => {
    return (
        <Menu inverted fluid fixed="bottom">
            <Menu.Item
                inverted
                position="right"
                fluid
                style={{ marginLeft: "200" }}
            >
                <Header inverted as="h4">
                    Made with &#9749; by Venkat Shukla
                </Header>
            </Menu.Item>
        </Menu>
    );
};
