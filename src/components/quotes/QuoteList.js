import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history= useHistory();
  const location= useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc'; 

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  //On passe en argument isSortingAscending cela veut dire qu'il va remplacer ascending passe en parametres dans la fonction

  const changeSortingHandler = () => {
    // history.push('/quotes?sort=asc');
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
      <div className={classes.sorting} >
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'} </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

//a la place de sortedQuotes, avant d'ecrire cette fonction il y avait props.quotes

// When we click the sort button the Url changes
// useHistory donne acces a l'objet history qui nous permet de changer et de gerer l'URL
// useLocation donne acces a l'objet location qui nous donne des informations sur la page couramment chargee et son URL