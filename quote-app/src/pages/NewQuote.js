import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history= useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]); //when the status and the history change (dependencies)

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);

    // history.push('/quotes'); 
  };

  return <QuoteForm  isLoading= {status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;

// Sans le useHistory qui est evidemment un React Hook, nous ne pouvons pas quitter la page new quote apres le submit.
// .push permet d'ajouter la nvlle page on pouvait utiliser .replace ...
// isLoading est utilise comme props dans le component QuoteForm pour afficher LoadingSpinner