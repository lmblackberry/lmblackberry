import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import PackageList from "./pages/packageList/PackageList";
import ProductEdit from "./pages/productEdit/ProductEdit"
import Package from "./pages/package/Package"
import UserOrders from "./pages/userOrders/UserOrders";
import NewPackage from "./pages/newPackage/NewPackage";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/users/:userId">
          <UserOrders />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/userEdit/:userId">
            <User />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/productEdit/:productId">
            <ProductEdit />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/packages">
            <PackageList/>
          </Route>
          <Route path="/package/:packageId">
          <Package/>
          </Route>
          <Route path="/newPackage">
            <NewPackage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
