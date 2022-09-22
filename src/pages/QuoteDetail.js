import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const MED_QUOTES = [
    {id:'q1', author:'Med', text:'A word to the wise is enough'},
    {id:'q2', author:'Johan Cruyff', text:'Football is simple but playing simple football is the hardest thing in the world'},
    {id:'q3', author:'Mhd', text:"It's through education that the son of the miner, the son of peasant, the son of the cobbler becomes the President of a great Nation"},
    {id:'q4', author:'Nelson Mandela', text:'Education is the most powerful weapon which you can use to change the world'},
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = MED_QUOTES.find(quote => quote.id === params.quoteId);
    //C'est le quoteId qui est indique comme chemin dans App.js

    if(!quote) {
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            {/* <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p> */}
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact> {/* Cela a permis de faire disparaitre Load comments after click  */}
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                    Load comments
                    </Link>
            </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;