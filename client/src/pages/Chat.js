import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ChatCard from '../components/ChatCard';


export default class Chat extends Component {
    state = {
        list: [],
        dpo: [],
        message: '', 
    }

    async componentDidMount (){
        this.setState({list: [
            {author: 'joao', content: 'maria'},
            {author: 'joao2', content: 'maria2'},
            {author: 'joao', content: 'maria3'},
            {author: 'joao4', content: 'maria4'},
        ]})
        this.setState({dpo: 'joao'})
    }
    handleChange = (event) => {
        this.setState({message: event.target.value});
    }
    handleSubmit = (event) => {
        var list = this.state.list;
        list.push({author: 'joao', content: this.state.message});
        this.setState({list: list});
        this.setState({message: ''});
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
                                    content={msg.content}
                                    dpo={this.state.dpo}
                                 />
                        })
                    }
                    </Grid>
                    <Grid item xs={9}>
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
                    <Grid item xs={3}>
                        <Button onClick={this.handleSubmit}> Enviar </Button>
                    </Grid>

                </Grid>
            </section>
        );
    }
}