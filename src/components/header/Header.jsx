import React, { useContext, useState } from 'react'
import "../header/style.css"
import LoginContext from '../../utils/loginContext'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import BrandContext from "../../utils/brandContext";
import SearchIcon from '@mui/icons-material/Search'
import { useEffect } from 'react';

export default function Header() {
  const{ email}=useContext(LoginContext)
  const {userImage}=useContext(LoginContext)
  const {login}=useContext(LoginContext)
  const {totalQuantity}=useSelector(state=>state.shop)
  const { brand } = useContext(BrandContext);
  const [scroll,setScrolled]=useState(false)
  

//header get fixed after height 200
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll",handleScroll)
}, []);

  let logosrc;
  switch (brand) {
    case "Mr. Pen":
      logosrc="https://imgurl.ir/uploads/l959943_download-removebg-preview.png"
      break;
    case "Bates":
      logosrc="https://imgurl.ir/uploads/n63057_Bates-removebg-preview.png"
      break;
    case "UNCO":
      logosrc="https://imgurl.ir/uploads/j418496_UNCO-removebg-preview.png"
      break;
    case "Slick":
      logosrc="https://imgurl.ir/uploads/k43718_Slick_Solution_Final.png"
      break;
      case "Dius":
        logosrc="https://imgurl.ir/uploads/u6978_dius_llc_logo.jpg"
        break;
      case undefined:
          logosrc="https://imgurl.ir/uploads/u6978_dius_llc_logo.jpg"
          break;
    default:
      break;
  }
  return (
    <header>

    {scroll? //scollY>200
     <div class="container-fluid mx-auto headerFixed ">
      <div class="row mt-2 align-items-center">
        <div class="col-lg-2 col-12">
          <img src={logosrc}
           width="100px" height="80px"/>

        </div>
        <div class="col-lg-6 col-6">
          <div class="input-group serchform searchForm">
            <input type="search" class="form-control border-dark " placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
            <button type="button" class="btn border-dark border-start-0 text-white btnsearch">
              <SearchIcon></SearchIcon>
            </button>
          </div>
        </div>
        <div class="col-lg-4  disnon col-6 ">
          <div>
        
            <div className='dispalay-flex flex-row gap-2 mx-auto'>
            <p>{email}</p>
            {userImage &&login &&<img src={URL.createObjectURL(userImage)} style={{ width: "40px", height: "40px",borderRadius:"50%" }} />}
            <Link to="/product-table"> 
            <ShoppingBagIcon sx={{color:"var(--first-color)"}}></ShoppingBagIcon>
            </Link>
            <p>{totalQuantity}</p>
            </div>

          </div>
        </div>
      </div>
    </div>://scrollY<200
        <div class="container mx-auto  ">
        <div class="row mt-2 align-items-center gap-1 ">
          <div class="col-lg-2 col-4 ">
            <img src={logosrc}
             width="100px" height="80px"/>
          </div>
          <div class="col-lg-6 col-6 ">
            <div class="input-group serchform searchForm">
              <input type="search" class="form-control border-dark  " placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
              <button type="button" class="btn border-dark border-start-0 text-white btnsearch">
                <SearchIcon></SearchIcon>
              </button>
            </div>
          </div>
          <div class="col-lg-2  disnon col-12  ">
              <div className='dispalay-flex flex-row gap-2 mx-auto'>
              <p>{email}</p>
              {userImage &&login &&<img src={URL.createObjectURL(userImage)} style={{ width: "40px", height: "40px",borderRadius:"50%" }} />}
              <Link to="/product-table"> 
              <ShoppingBagIcon sx={{color:"var(--first-color)"}}></ShoppingBagIcon>
              </Link>
              <p>{totalQuantity}</p>
              </div>
          </div>
        </div>
      </div> 
    }

  </header>
  )
}
