import React, {useState} from "react";
import './css/LogSignUp.css';
import { Link } from "react-router-dom";
import { auth, fs } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
  const navigate = useNavigate();

  const [fullName, setFullName]=useState(''); 
  const [email, setEmail]=useState(''); 
  const [password, setPassword]=useState(''); 
  const [userType, setUserType]=useState(''); 

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  const handleSignIn=(e)=>{
      e.preventDefault();
      console.log(fullName, email, password);
      signInWithEmailAndPassword(auth,email,password).then(()=>{
            setSuccessMsg('SignIn Succesful. You will now redirected to Homepage');
            setFullName('');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() =>{
              setSuccessMsg('Successful');
              navigate('home')
            }, 3000)
          }).catch(error=>setErrorMsg(error.message));
  }

    return (
        <div>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <hr></hr>
        {successMsg&&<>
        <div className='success-msg'>{successMsg}</div>
        <br></br>
        </>}
        <form onSubmit={handleSignIn}>
          {/* <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div> */}

          {/* <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

       <h1> <Link to='home'>CLICK HERE TO GO HOME 'FOR THE MEANTIME HEHEZ'</Link></h1>
          <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>

        
          <div data-mdb-input-init class="form-outline mb-3">
          <label class="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)} value={password} />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='signup'>Register</Link></p>
            
          </div>'
        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
   

  
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  
  </div>
</section>
        </div>
    )
};

export default Login;