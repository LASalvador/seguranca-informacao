import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Components Imports
import Chat from './pages/Chat';
import ListaConversa from './pages/ListaConversas';
import Home from './pages/Home';
import cadastrocomunicado from './pages/CadastroComunicado';
import cadastroDPO from './pages/CadastroDPO';
import Login from './pages/Login';

export default function Routes() {
    return (
        <Switch>
            <Route path='/chat/:id' exact component={Chat} />
            <Route path='/' exact component={Home} />
            <Route path='/lista' exact component={ListaConversa} />
            <Route path='/cadastrocomunicado' exact component={cadastrocomunicado} />
            <Route path='/cadastre-se' exact component={cadastroDPO} />
            <Route path='/login' exact component={Login} />
        </Switch>
    );
}