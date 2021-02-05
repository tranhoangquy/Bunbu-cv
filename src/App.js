import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './Login/Login'
import routes from './Router'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './Register/Register'
import axios from 'axios'
function App() {
    const showScreen = (routes) => {
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + localStorage.getItem('token')
        const result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            )
        })
        return <Switch>{result}</Switch>
    }
    return (
        <div className="App">
            <Router>
                <Link to={'/Home-admin'}></Link>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route
                        exact
                        path="/forgotPassword"
                        component={ForgotPassword}
                    ></Route>
                    <Route
                        exact
                        path="/forgotPassword"
                        component={ForgotPassword}
                    ></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                </Switch>
                {showScreen(routes)}
            </Router>
        </div>
    )
}

export default App
