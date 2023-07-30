import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Switch>
        <Route path='/' exact>
        <Redirect to='/welcome'></Redirect>
        </Route>
      <Route path="/Welcome" >
      <Welcome/>
      </Route>
      <Route path="/Products" exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
      <ProductDetail/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
