import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Components Imports
import Chat from './pages/Chat';
import ListaConversa from './pages/ListaConversas';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path='/chat/:id' exact component={Chat} />
            <Route path='/list' exact component={ListaConversa} />
            <Route path='/' exact component={Home} />
        </Switch>
    );
}