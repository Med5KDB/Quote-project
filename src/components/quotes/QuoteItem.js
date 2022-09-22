import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;

//on peut utiliser href dans la balise a pour indiquer QuoteItem
// Mais cela serait comme demander une requete au serveur on aurait pas respecter le concept 
// de Single Page Application au lieu de cela nous allons utilise Link

// import { Link } from 'react-router-dom';

// import classes from './QuoteItem.module.css';

// const QuoteItem = (props) => {
//   return (
//     <li className={classes.item}>
//       <figure>
//         <blockquote>
//           <p>{props.text}</p>
//         </blockquote>
//         <figcaption>{props.author}</figcaption>
//       </figure>
//       <Link className='btn' to={`/quotes/${props.id}`}>
//         View Fullscreen
//       </Link>
//     </li>
//   );
// };

// export default QuoteItem;
