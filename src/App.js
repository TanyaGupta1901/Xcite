import React from 'react'
import Home from './Pages/Home'
import PaidFeatures from './Pages/PaidFeatures'
import Courses from './Pages/Courses'
import Blogs from './Pages/Blogs' 
import Logincard from './Pages/Logincard'
import Signincard from './Pages/Signincard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return ( 
      <>  
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/PaidFeatures" component={PaidFeatures}/>
        <Route exact path="/Courses" component={Courses}/>
        <Route exact path="/Signincard" component={Signincard}/>
        <Route exact path="/Logincard" component={Logincard}/>
        <Route exact path="/Blogs" component={Blogs}/>
      </Switch>
      </Router>
      </>
  );
}

export default App;
