import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import routes from './Router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
