import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import routes from './Router'
import ForgotPassword from './components/forgotPassword/forgotPassword'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
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
                </Switch>
            </Router>
        </div>
    )
}

export default App
