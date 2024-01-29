import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../SidebarBoot/style.css"

export default function SidebarBoot() {
  return (
  <>
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-light  mt-2 sidebar" style={{width: "280px;"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ">
      <svg class="bi me-2" width="40" height="32"><use ></use></svg>
      <span class="fs-5 p-0 SidebarHead">Sort the Products</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      <Link class="nav-link " to="/mrPen">All Products</Link>
      </li>
      <li>
      <Link class="nav-link " to="/under5">Sort by Price</Link>
      </li>
      <li>
      <Link class="nav-link " to="/sort-rate">Sort by Rate</Link>
      </li>
    </ul>
    <hr/>
  </div>
  </>
  )
}
