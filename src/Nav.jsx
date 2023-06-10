import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/income">Income</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/expenses">Expenses</Link>
  </li>
 
</ul>
    </div>
  )
}

export default Nav
