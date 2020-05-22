import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
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
      marginTop:30,
    },
    titulo: {
        fontSize:30, 
      },
    espacobtt: {
        marginTop:40,
        width: 300,
        marginLeft: 80, 
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
            <TextField id="email" label="E-mail" className={classes.espaco} />
            <TextField id="senha" label="Senha" type="password" className={classes.espaco} />
            <Button variant="contained" color="primary" className={classes.espacobtt}>
              Entrar
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