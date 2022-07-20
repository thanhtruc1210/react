import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import TodoList from './Todo/TodoList'
import Nav from './Nav/Nav'
import Home from './Example/Home'
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <TodoList />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUsers />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
