import React, { Component } from 'react';
import ChatCard from '../components/ChatCard';

export default class Chat extends Component {
    state = {
        list: []
    }

    async componentDidMount (){
        this.setState({list: [
            {author: 'joao', content: 'maria'},
            {author: 'joao2', content: 'maria2'},
            {author: 'joao3', content: 'maria3'},
            {author: 'joao4', content: 'maria4'},
        ]})
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