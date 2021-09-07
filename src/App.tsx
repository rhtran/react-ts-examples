import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import UserList from "./pages/user-list/UserList";
import TodoList from "./pages/todo-list/TodoList";

import Home from "./pages/home/Home";
// import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
        <Route path="/newUser">
          <NewUser />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
        <Route exact={true} path="/user-list" component={UserList}></Route>
        <Route exact={true} path="/todo-list" component={TodoList}></Route>
      </Switch>
    </div>
  );
}

export default App;
