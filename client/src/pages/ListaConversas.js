import React, { Component } from 'react';

function Blog(props) {
  const conteudo = props.cardList.map((cardList) =>
    <div key={cardList.id}>
      <br></br>
      <h3>{cardList.title}</h3>
      <p>{cardList.content}</p>
    </div>
  );
  return (
    <div>
      {conteudo}
    </div>
  );
}
const cardList = [
  {id: 1, name: 'Mayara', data: '12/02/2020'},
  {id: 2, title: 'Installation', content: 'Mayara'}
];

function lista(props){
  return(
    <Blog cardList={cardList}/>
  );
}
export default lista;