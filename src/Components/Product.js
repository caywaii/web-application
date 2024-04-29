import React, {useState}from "react";
import { storage, fs } from "../Config/firebase";
import {ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';


import './css/Home.css';
import { Link } from "react-router-dom";


export const Product = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [image, setImage] = useState(null);

    const [imageError, setImageError]=useState('');
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    const productsCollectionRef = collection (fs, 'tblProducts');
    const type = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

    const handleProductsImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile && type.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }else{
                setImage(null);
                setImageError('Pleasse select a valid file type (png or jpg)');
            }
        }else{
            console.log('please select your file');
    }
    }

    const handleAddProducts=(e) => {
        e.preventDefault();
        if(image!=null){
            const imgRef = ref(storage, `tblProducts/${image.name}`);
            uploadBytes(imgRef, image).then((snapshot)=>{
                getDownloadURL(snapshot.ref).then((url)=>{
                    addDoc(productsCollectionRef, {
                        prodTitle: title,
                        prodDesc: description,
                        prodPrice: Number(price),
                        prodQty: Number(qty),
                        prodURL: url,
                        timeStamp: serverTimestamp()
                    }).then(()=>{
                        setSuccessMsg('Product added successfully');
                        setTitle('');
                        setDescription('');
                        setPrice('');
                        setQty('');
                        setImage(null);
                        document.getElementById('file').value='';
                        setImageError('');
                        setUploadError('');
                        setTimeout(() => {
                            setSuccessMsg('');
                        },3000)
                    }).catch(error=>setUploadError(error.message));
                })
            })
        }
    }



    return (
    <div>
<body class="d-flex flex-column">
        <main class="flex-shrink-0">
         
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">Start Bootstrap</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><Link to='/product' class="nav-link">Product</Link></li>
                            <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
                            <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><Link to='/' class="nav-link">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <section class="py-5">
                <div class="container px-5">
            
                    <div class="bg-light rounded-4 py-5 px-4 px-md-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                            <h1 class="fw-bolder">Products</h1>
                            <p class="lead fw-normal text-muted mb-0">Input Your Selling Product</p>
                            <hr></hr>
                            {successMsg&&<>
                                <div className='success-msg'>{successMsg}</div>
                                <br></br>
                            </>}
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                   
                                <form id="contactForm" autoComplete="off" onSubmit={handleAddProducts}>
                                   
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="prodTitle" type="text" placeholder="Enter Product Title" data-sb-validations="required" 
                                        onChange={(e) => setTitle(e.target.value)} value={title}/>
                                        <label for="Title">Product Title</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A Title is required.</div>
                                    </div>
                                  
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="prodDesc" type="text" placeholder="Enter Product Description" data-sb-validations="required,email" 
                                        onChange={(e) => setDescription(e.target.value)} value={description}/>
                                        <label for="Description">Product Description</label>
                                        <div class="invalid-feedback" data-sb-feedback="email:required">This is Required.</div>
                                      
                                    </div>
                               
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="price" type="number" placeholder="500" data-sb-validations="required" 
                                        onChange={(e) => setPrice(e.target.value)} value={price}/>
                                        <label for="price">Product Price</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">Enter Product Price.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="qty" type="number" placeholder="500" data-sb-validations="required" 
                                        onChange={(e) => setQty(e.target.value)} value={qty}/>
                                        <label for="qty">Product Quantity</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">Enter Product Quantity.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="file" type="file" placeholder="Enter Image" data-sb-validations="required" 
                                          onChange={handleProductsImg}/>
                                          {imageError&&<>
                                          <br></br>
                                          <div className='error-msg'>{imageError}</div>
                                          
                                          </>}
                                        <label for="attachment">Upload Product Image</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">Upload an Image.</div>
                                    </div>
                          
                                    <div class="d-grid"><button class="btn btn-primary btn-lg" type="submit">Insert Product</button></div>
                                </form>
                                {uploadError&&<>
                                <br></br>
                                <div className='error-msg'>{uploadError}</div>
                                </>}

                            </div>
                        </div>
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
       
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    </div>
    ) 
    }


export default Product;