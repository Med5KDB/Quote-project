import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' /> {/* afficher la page quote when we have only / */}
        </Route>
        <Route path='/quotes' exact> 
        {/* exact permet de pouvoir afficher quote/med par exemple sans cela React va afficher quotes mm si on lui indique quotes/med l'autre possibilite c de changer l'ordre faire venir quote/quoteId avant quote */}
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
//on importe Switch parce qu'on sait qu'on a besoin d'une seule Route en meme temps
// Definir les routes n'est pas suffisant, il faut importer the  BrowserRouter Component
// et le wrapper dans <App /> qui se trouve dans index.js

//On a mis * pour dire que tout autre Url different de ceux indiques precedemmment  