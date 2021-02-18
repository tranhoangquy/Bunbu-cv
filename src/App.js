import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import routes from './Router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/register/register'
import axios from 'axios'
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/signup" component={SignUp}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
