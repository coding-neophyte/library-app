import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    // <main className="container">
    //   <h1>Library Catalog</h1>
    //   <BookList />
    // </main>
    <div>
      <Router>
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/" className="app-link" exact>
            Home
          </NavLink>
          <NavLink to="/books" className="app-link" exact>
            Book List
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:bookId" component={BookDetail} />
        </Switch>
        <footer> Footer </footer>
      </Router>
    </div>
  )
}

export default App
