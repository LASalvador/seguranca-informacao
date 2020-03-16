import React, { Component } from 'react';
import ChatCard from '../components/ChatCard';


export default class Chat extends Component {
    state = {
        list: [],
        dpo: []
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

    render () {
        return (
            <section>
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

            </section>
        );
    }
}