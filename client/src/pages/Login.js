import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import api from '../services/http'

const useStyles = makeStyles({
    root: {
      flex: 1, 
      fontSize: 15, 
      display: 'flex',
      alignItems: 'center',
      textAlign: "center",
    },
    espaco: {
      marginTop:30,
      width: '50vw'
    },
    titulo: {
        fontSize:30, 
      },
    espacobtt: {
        marginTop:40,
        textAlign: "center",
        height: 50
      },
});

function Item(props){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    
    return (
        <FormControl className={classes.root}>
            <h1 className={classes.titulo}>Login</h1>
            <TextField 
              id="email" 
              label="E-mail" 
              className={classes.espaco} 
            />
            <TextField 
              id="senha" 
              label="Senha" 
              type="password" 
              className={classes.espaco} 
            />
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.espacobtt}
            >
              Entrar
            </Button>
        </FormControl>
    )
}
export default class Home extends Component {
    render () {
        return (
            <Item />
        );
    }
}