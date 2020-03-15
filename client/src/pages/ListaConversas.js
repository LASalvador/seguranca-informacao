import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Blog(props) {
  const classes = useStyles();
  const conteudo = props.cardList.map((cardList) =>
    <Card className={classes.root}>
      <CardContent>
        <div key={cardList.id}>
          <h3>{cardList.title}</h3>
          <p>{cardList.dia} - {cardList.hora}</p>
        </div>
      </CardContent>
    </Card>
  );
  return (
      <div>
        {conteudo}
      </div>
  );
}
const cardList = [
  {id: 1, title: 'Mayara', dia: '12/02/2020', hora:'12h30'},
  {id: 2, title: 'Lucas',  dia: '13/02/2020', hora:'15h30'}
];

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
});

function lista(props){
  return(
    <Blog cardList={cardList}/>
  );
}
export default lista;