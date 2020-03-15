import React, { Component } from 'react';
import { styled } from '@material-ui/core/styles';
import ChatCard from '../components/ChatCard';


const ModifiedCard = styled(({hash, ...other}) => <ChatCard {...other} />)({
    background: props => 
    props.hash ? 
    '#e4e4e4'
    : 'rgb(204,216,255)'
})

export default class Chat extends Component {
    state = {
        list: [],
        hash: []
    }

    async componentDidMount (){
        this.setState({list: [
            {author: 'joao', content: 'maria'},
            {author: 'joao2', content: 'maria2'},
            {author: 'joao3', content: 'maria3'},
            {author: 'joao4', content: 'maria4'},
        ]})
        this.setState({hash: 'aaaaaaaaaaaaaaaaaaaa'})
    }

    render () {
        return (
            <section>
                {
                    this.state.list.map((msg) => {
                       return <ChatCard 
                            author={msg.author} 
                            content={msg.content}
                        />
                    })
                }

            </section>
        );
    }
}