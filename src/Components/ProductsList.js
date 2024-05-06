import React, { useState, useEffect } from "react";
import { fs } from "../Config/firebase";
import {ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import {collection, addDoc, serverTimestamp, getDocs} from 'firebase/firestore';
import Navbar from "./Navbar";
import './css/Home.css';
import { Link } from "react-router-dom";
import pic from './Assets/me.png'

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollectionRef = collection(fs, 'tblProducts');
                const querySnapshot = await getDocs(productsCollectionRef);
                const productsData = [];
                querySnapshot.forEach((doc) => {
                    productsData.push({ id: doc.id, ...doc.data() });
                });
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };
        fetchProducts();
    }, []);
//hello world


    return (
    <div>
 <body class="d-flex flex-column h-100 bg-light">
        <main class="flex-shrink-0">

            <Navbar/>
       
            <section class="py-5">
                <div class="container px-5 mb-5">
                    <div class="text-center mb-5">
                        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Products</span></h1>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-11 col-xl-9 col-xxl-8">



            
                    {products.map((product) => (
                            
                            <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">{product.prodTitle}</h2>
                                            <p>{product.prodDesc}</p>
                                             <p>Price: ${product.prodPrice}</p>
                                        </div>
                                        <img class="img-fluid" src={product.prodURL} alt={product.prodTitle}  />
                                    </div>
                                </div>
                            </div>
                        ))}
        

                           
                     
                            <div class="card overflow-hidden shadow rounded-4 border-0">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">Project Name 2</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                        </div>
                                        <img class="img-fluid" src={pic} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section class="py-5 bg-gradient-primary-to-secondary text-white">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                    </div>
                </div>
            </section>
        </main>
  
        <footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0">Copyright &copy; Your Website 2023</div></div>
                    <div class="col-auto">
                        <a class="small" href="#!">Privacy</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Terms</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      
        <script src="js/scripts.js"></script>
    </body>
    </div>
    ) 
    }


export default ProductList;