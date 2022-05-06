import { Route } from 'react-router-dom';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import ProductsLayout from './layouts/products';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <DefaultLayout />
        </Route>
        <Route path='/products'>
          <ProductsLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
