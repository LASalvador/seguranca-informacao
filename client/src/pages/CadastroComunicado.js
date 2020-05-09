import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import api from '../services/http'

const useStyles = makeStyles({
    root: {
      width:500,
      flex: 1, 
      marginRight:100,
      marginLeft: 500, 
      fontSize: 15, 
      textAlign: "center"
    },
    espaco: {
      marginTop:20,
    },
    titulo: {
        fontSize:30, 
      },
    espacobtt: {
        marginTop:40,
        width: 300,
        marginLeft: 120, 
        textAlign: "center",
        height: 50
      },
});

function Item(props){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    
    return (
        <FormControl className={classes.root}>
            <h1 className={classes.titulo}>Cadastro</h1>
            <TextField id="nome" label="Nome" className={classes.espaco} />
            <TextField id="email" label="E-mail" className={classes.espaco} />
            <TextField id="descricao" label="Descrição" className={classes.espaco} />
            <FormControl className={classes.espaco}>
            <InputLabel id="demo-simple-select-label">Selecione o DPO</InputLabel>
            <Select>
            <MenuItem value={10}>Mayara</MenuItem>
            <MenuItem value={20}>Lucas</MenuItem>
            <MenuItem value={30}>joão</MenuItem>
            </Select>
            </FormControl>
            <Button variant="contained" color="primary" className={classes.espacobtt}>
              Cadastrar
            </Button>
        </FormControl>
    )
}
export default class Home extends Component {
    state = {
        cardList: [],
      }
      async componentDidMount(){
        const resposta = await api.post('/comunicado')
    
        const lista = resposta.data.retorno.map((item) => {
          return {
            id: item.cod_comunicado,
            title: item.responsavel_comunicado,
            dia: item.data_atualizacao
          }
        })
        this.setState({cardList: lista})
      }
    render () {
        return (
            <Item cardList={this.state.cardList}/>
        );
    }
}