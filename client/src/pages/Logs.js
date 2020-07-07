import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import api from '../services/http'

export default class Chat extends Component {

    state = {
        
    }

    async componentDidMount (){
    }

    render () {
        return (
            <section>
                <List>
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                </List>
            </section>
        );
    }
}