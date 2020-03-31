import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ChatCard from '../components/ChatCard';
import api from '../services/http'

export default class Chat extends Component {
    state = {
        list: [],
        dpo: [],
        message: '',
    }

    async componentDidMount (){
        const id = this.props.match.params.id;
        const response = await api.get(`comunicado/${id}`);
        this.setState({list: response.data.lista_comunicados.respostas})
        this.setState({dpo: 'joao'})
    }
    handleChange = (event) => {
        this.setState({message: event.target.value});
    }
    handleSubmit = (event) => {
        var list = this.state.list;
        list.push({author: 'joao', conteudo: this.state.message});
        this.setState({list: list});
        this.setState({message: ''});

        api.post('resposta/', {
            conteudo: this.state.message,
            autor: 'joão',
            cod_comunicado: this.props.match.params.id
        })
    }
    render () {
        return (
            <section>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    {
                        this.state.list.map((msg, index) => {
                            return <ChatCard
                                    key={index} 
                                    author={msg.author}
                                    content={msg.conteudo}
                                    date={msg.data}
                                    dpo={this.state.dpo}
                                 />
                        })
                    }
                    </Grid>
                    <Grid item xs={10}>
                        <form autoComplete="off">
                            <FormControl fullWidth>
                                <TextField
                                    id="standard-textarea"
                                    placeholder="Mensagem"
                                    rows="3"
                                    multiline
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                        </form>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.handleSubmit}> Enviar </Button>
                    </Grid>
                </Grid>
            </section>
        );
    }
}