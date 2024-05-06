import React, {useState}from "react";
import './css/Home.css';
import { Link } from "react-router-dom";

export const Navbar = () => {


    return (
    <div>
<body class="d-flex flex-column">
        <main class="flex-shrink-0">
         
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <Link to="/home" class="navbar-brand" ><span class="fw-bolder text-primary">Caryl Products</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><Link to='/product' class="nav-link">Product</Link></li>
                            <li class="nav-item"><Link to='/product-list' class="nav-link">Shop</Link></li>
                            <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><Link to='/' class="nav-link">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </main>
   
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      
        <script src="js/scripts.js"></script>
       
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    </div>
    ) 
    }


export default Navbar;