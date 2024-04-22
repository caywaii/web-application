import React, {useState} from "react";
import './css/LogSignUp.css';
import { Link } from "react-router-dom";
import { auth, fs } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {

  const navigate = useNavigate();

  const [fullName, setFullName]=useState(''); 
  const [email, setEmail]=useState(''); 
  const [password, setPassword]=useState(''); 
  const [userType, setUserType]=useState(''); 

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  const handleSignup=(e)=>{
      e.preventDefault();
      console.log(fullName, email, password, userType);
      createUserWithEmailAndPassword(auth,email,password).then(
        async(userCredential)=>{
          const ref = doc(fs, "tblUsers", userCredential.user.uid)
          const docRef = await setDoc(ref, {
            FullName: fullName,
            Email: email,
            Password: password,
            UserType: userType
          }).then(()=>{
            setSuccessMsg('Signup Succesful. You will now redirected to Login');
            setFullName('');
            setEmail('');
            setPassword('');
            setUserType('');
            setErrorMsg('');
            setTimeout(() =>{
              setSuccessMsg('Successful');
              navigate('/')
            }, 3000)
          }).catch(error=>setErrorMsg(error.message));
        }).catch((error)=>{
          setErrorMsg(error.message)
        })
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
        <form autoComplete='off' onSubmit={handleSignup}>
          <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Name</label>
            <input type="Text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter Your Name" required onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>

          <label class="form-label" for="form3Example3">User Type</label>

        <div class="dropdown">
          <select class="form-select" aria-label="Default select example" value={userType} onChange={(e)=>setUserType(e.target.value)}>
            <option selected  >Open this select menu</option>
            <option value="Admin">Admin</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Executive">Executive</option>
          </select>
        
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
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Create Account</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Have an Account? <Link to='/'>Log In</Link></p>
            
          </div>'
        </form>
        {errorMsg&&<>
        <div className='error-msg'>{errorMsg}</div>
        </>}
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

export default Signup;