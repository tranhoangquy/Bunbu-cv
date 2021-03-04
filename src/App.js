import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import routes from './Router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const showScreen = (routes) => {
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
        <Switch></Switch>
        {showScreen(routes)}
      </Router>
    </div>
  )
}

export default App
