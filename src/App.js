import { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderButton from "./Components/HeaderBuuton/HeaderButton";
import Home from "./Components/Pages/Home/Home";
import Main from "./Components/Pages/Home/Main/Main";
import Login from "./Components/Pages/login/login";
import Product from "./Components/Pages/product/product"; 
import Profile from "./Components/Pages/profile/profile";
import { AuthContext } from "./Context/authContext";
import Products from "./Components/Pages/tooProduct/tooProduct";
import Error from "./Components/Pages/Error/Error";
import Top from "./Components/Pages/Top/Top";
import Magazin from "./Components/Pages/Magazin/Magazin";
import Nastroyka from "./Components/Pages/profile/nastroyka/nastroyka";

function App() {
  const  {token} = useContext(AuthContext)
return (
 <>
            <div className="App">
              <Header/>
            <Routes>
              <Route path="/" element={<Home/>}>
              </Route>
              <Route path="/product/:productId" element={<Product/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/biznes" element={ <Footer/>}/>
              <Route path="/pomosh" element={<Footer/>}/>
              <Route path="/magazin" element={<Magazin/>}/>
              <Route path="/top"  element={<Top/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}>
                <Route path="nastroyka" element={<Nastroyka/>}/>
              </Route>
              {
              token ? 
              <Route path="/" element={<Home/>}/>
               : 
               <Route path="/login" element={<Login/>}/>}
              <Route path="*" element={<Error/>}/>
            </Routes>
            

</div>

 </>
    
  );
}

export default App;
