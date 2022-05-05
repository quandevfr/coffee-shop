import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import DefaultLayout from './layouts/default';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <DefaultLayout />
      </Route>
    </Switch>
  );
}

export default App;
