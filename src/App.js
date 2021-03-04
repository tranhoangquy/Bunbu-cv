import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import routes from './Router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/register/register'
import ForgotPassword from './components/forgotPassword/forgotPassword'
import Login from './components/forgotPassword/forgotPassword'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route
            exact
            path="/forgotPassword"
            component={ForgotPassword}
          ></Route>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
