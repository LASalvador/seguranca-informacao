import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../services/http'

const useStyles = makeStyles({
    root: {
      fontSize: 15, 
      textAlign: "center",
      display: 'flex',
      alignItems: 'center'
    },
    espaco: {
      marginTop:20,
      width:'50vw',
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

function Form(props){
    const classes = useStyles();
    
    return (
        <FormControl className={classes.root}>
            <h1 className={classes.titulo}>Cadastro</h1>
            <TextField 
              id="nome" 
              label="Nome" 
              className={classes.espaco} 
            />
            <TextField 
              id="email" 
              label="E-mail" 
              type="email"
              className={classes.espaco} 
            />
            <FormControl className={classes.espaco}>
              <InputLabel 
                id="demo-simple-select-label"
              >
                Selecione o DPO
              </InputLabel>
              <Select>
                {props.dpos.map(item => (
                  <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField 
              className={classes.espaco} 
              id="descricao" 
              label="Descrição" 
              multiline={true} 
              rows={3}
            />
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.espacobtt}
            >
              Cadastrar
            </Button>
        </FormControl>
    )
}
export default class CadastroComunicado extends Component {
    state = {
      dpos: [],
    }

    async componentDidMount () {
      const response = await api.get('dpo');
      const dpos = response.data.retorno.map((item) => {
        return  {
          id: item.cod_dpo,
          nome: item.nome_dpo
        }
      })

      this.setState({dpos: dpos})
    }
    render () {
        return (
            <Form dpos={this.state.dpos}/>
        );
    }
}