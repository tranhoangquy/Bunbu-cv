import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/login/login'
import routes from './Router'
import ForgotPassword from './components/forgotPassword/forgotPassword'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/register/register'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route
            exact
            path="/forgotPassword"
            component={ForgotPassword}
          ></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
