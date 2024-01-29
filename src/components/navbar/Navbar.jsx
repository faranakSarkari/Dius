import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import BrandContext from '../../utils/brandContext'
import "../navbar/style.css"

export default function Navbar() {
  const {setBrand}=useContext(BrandContext)
  const [scroll,setScrolled]=useState(false)

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

  return (
  <>
  {console.log("scroll:",scroll)}
  {scroll? 
  //fixed
   <nav className="navbar navbar-expand-lg bg-dark mx-auto ">
  <div class="container-fluid  navFix ">

    <button className="navbar-toggler collapseBtn " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0  ">
        <li class="nav-item ">
          <Link class="nav-link active text-light" aria-current="page" to="/" onClick={()=> setBrand('Dius')}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/mrPen" onClick={()=> setBrand('Mr. Pen')}>Mr. Pen</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/bates" onClick={()=> setBrand('Bates')}>Bates</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/unco" onClick={()=> setBrand('UNCO')}>Unco</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/slick" onClick={()=> setBrand('Slick')}>Slick</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/login-register" onClick={()=> setBrand('Dius')}>Login-Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>: 
//not fixed
<nav class="navbar navbar-expand-lg bg-dark mx-auto ">
  <div class="container-fluid  ">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0  ">
        <li class="nav-item ">
          <Link class="nav-link active text-light" aria-current="page" to="/" onClick={()=> setBrand('Dius')}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/mrPen" onClick={()=> setBrand('Mr. Pen')}>Mr. Pen</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/bates" onClick={()=> setBrand('Bates')}>Bates</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/unco" onClick={()=> setBrand('UNCO')}>Unco</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/slick" onClick={()=> setBrand('Slick')}>Slick</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/login-register" onClick={()=> setBrand('Dius')}>Login-Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
}


  </>
  )
}
