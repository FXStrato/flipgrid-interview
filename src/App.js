import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
const Signup = lazy(() => import('./routes/Signup'));
const Confirmation = lazy(() => import('./routes/Confirmation'));

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' render={() => <Signup />} />
          <Route path='/confirmation' render={() => <Confirmation />} />
          <Route path='*'>
            <div className='form-box'>
              <h1>Oops!</h1>
              <p>There's nothing here!</p>
            </div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
