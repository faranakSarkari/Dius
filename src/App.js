import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "./utils/authContext";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./Pages/Main/Main";
import Footer from "./components/Footer/Footer";
import BlackFooter from "./components/BlackFooter/BlackFooter";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { useState } from "react";
import BrandContext from "./utils/brandContext";
import LoginContext from "./utils/loginContext";
import Under5 from "./Pages/Under 5 Mr.Pen/Under5";
import Products from "./Pages/products/Products";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import Register from "./Pages/register/Register";
import ShopContext from "./utils/shopContext";
import ProductTable from "./Pages/ProductTable/ProductTable";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SortRate from "./Pages/SortRate/SortRate";

const theme=createTheme({
  palette:{
    primary:{main:"#05a2a2"},
    secondary:{main:"#597081"}
  }

})

function App() {
  const [price, setPrice] = useState();
  const [rate,setRate]=useState([0,5])
  const [brand, setBrand] = useState();
  const [login,setLogin]=useState(false)
  const [email,setEmail]=useState()
  const [userImage,setUserImage]=useState()
  const [name,setName]=useState([])
  const [quantity,setQuantity]=useState([])
  const [totalQuantity,setTotalQuantity]=useState()
  const [shopPrice,setShopPrice]=useState([])
  

  return (
    <>
      <AuthContext.Provider value={{ price, setPrice,rate,setRate }}>
        <BrandContext.Provider value={{ brand, setBrand }}>
          <LoginContext.Provider value={{login,setLogin,email,setEmail,userImage,setUserImage}}>
            <ShopContext.Provider value={{name,setName,quantity,setQuantity,totalQuantity,setTotalQuantity,shopPrice,setShopPrice}}>
              <ThemeProvider theme={theme}>
              <Header />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/mrPen"  element={<Products />} />
              <Route path="/bates"  element={<Products />} />
              <Route path="/unco"   element={<Products />} />
              <Route path="/slick"  element={<Products />} />
              <Route path="/under5" element={<Under5 />} />
              <Route path="/sort-rate" element={<SortRate />} />
              <Route path="/product-details/:productId" element={<ProductDetail/>}/>
              <Route path="/login-register" element={!login?<LoginRegister/>: <Navigate to={"/"}/>}/>
              <Route path="/register"  element={<Register />} />
              <Route path="/product-table" element={<ProductTable/>}/>
            </Routes>
            <Footer />
              </ThemeProvider>
            </ShopContext.Provider>
          </LoginContext.Provider>
        </BrandContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
