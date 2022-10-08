import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Feedback from './Feedback';



function App() {
  return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/feedback">
          <Feedback/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
      <Subscribe/>
      <Footer/>
      </>
  );
}

export default App;
