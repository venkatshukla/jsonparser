import React, { Component } from "react";
import { TextArea, Grid, Form } from "semantic-ui-react";
import Layout from "../components/Layout";
import Highlight from 'react-highlight'
const JSON5 = require('json5');

//Array for sorting options

class JsonparserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonvalue: null //  the sortBy option
        };
    }

    // Method triggered when sortBy option is changed
    handleChange = (e, { name, value }) => {
        this.setState({ jsonvalue: value });
        //console.log(this.state.sortBy);
    };

   getJSON(){
    try {
        var parsed = JSON5.parse(this.state.jsonvalue,null,6);
        var plainjson = JSON.stringify(parsed, undefined, 6);
        return plainjson;
    } catch (error) {
        if(this.state.jsonvalue.length<1){
            return 'Parsed Json will appear here!';
        }
        return `Error: ${error}`;
    }
   
   }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={7} >
                    <Form fluid>
                        <TextArea placeholder='Paste your json here!' onChange={this.handleChange} style={{ minHeight: 600, 'margin-left':'25px' }} />
                    </Form>
                    </Grid.Column>

                    <Grid.Column width={8} style={{ minHeight: 600, 'margin-left':'25px', 'margin-top': '15px', background: 'black' }}>
                   
                   <Highlight className='javascript'>
                    {this.state.jsonvalue!=null?this.getJSON():"Parsed Json output will appear here!"}  
                    </Highlight>
       
     
                    </Grid.Column>
                
                </Grid>
            </Layout>
        );
    }
}


export default JsonparserIndex;
