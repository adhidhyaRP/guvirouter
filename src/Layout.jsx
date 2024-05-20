// Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const Layout = () => {
  return (
    <>
      <div>
        <header className='header'><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GUVI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form class="d-flex">
       
        <input class="form-control me-2" type="search" placeholder="What you want to blog?" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></header>
<div className='options'>
    <div>
    <Link style={{textDecoration:'none' , color:'gray'}} to='/' >Home</Link>  

    </div>
    <div>
    <Link style={{textDecoration:'none' , color:'gray'}} to='/FullStackDevelopment' >FullStackDevelopment</Link>  
    </div>
    <div>
    <Link style={{textDecoration:'none' , color:'gray'}} to='/DataScience' >DataScience</Link>  
    </div>
    <div>
    <Link style={{textDecoration:'none' , color:'gray'}} to='/Devops' >Devops</Link>  
    </div>
    <div>
     <Link  style={{textDecoration:'none' , color:'gray'}}to='/CyberSecurity' >CyberSecurity</Link>     </div>
</div>
      </div>
      <div className='background'>
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
