import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./app.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import { useSelector } from "react-redux";

function App() {
  var admin = useSelector((state) => state.user.currentUser)
  if(admin == null || !admin.isAdmin) admin = null

  return (
    <Router>
      <Routes>
        <Route path="/login" element={admin ? <Navigate replace to="/home" />:<Login/>}/>
        <Route path="/*" element={admin ? <Navigate replace to="/home" />: <Navigate replace to="/login" />}/>
        {
          admin && 
        (<>
          <Route path="/logout" element={<Logout/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
        </>)
        }
      </Routes>
    </Router>

  );
}

export default App;
