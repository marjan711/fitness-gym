
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Service from './components/Service/Service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './components/Login/Login';
import  NotFound  from './components/NotFound/NotFound';

import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import Blogs from './components/Blogs/Blogs';
import PrivateRoute from './Private/PrivateRoute';



function App() {
  return (
    <div className="App">
     
     <AuthProvider>

     <Router>
      
      
        <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>

            <Route  path="/home">
               <Home></Home>
            </Route>

            <Route exact path="/services">
               <Services></Services>
            </Route>

            <PrivateRoute path="/services/:serviceId">
              <Service></Service>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/blog">
              <Blogs></Blogs>
            </Route>

            

            <Route  path="*">
              <NotFound></NotFound>
            </Route>

        </Switch>
        
        
      </Router>

     </AuthProvider>
      
       
    </div>
  );
}

export default App;
