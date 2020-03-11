import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Chat extends Component {
    render () {
        return (
            <Button variant="contained" color="primary">
                  Olá Mundo
            </Button>
        )
    }
}