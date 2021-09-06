import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import UserList from "./pages/UserList";
import TodoList from "./pages/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={UserList}></Route>
        <Route exact={true} path="/todo" component={TodoList}></Route>
      </Switch>
    </div>
  );
}

export default App;
