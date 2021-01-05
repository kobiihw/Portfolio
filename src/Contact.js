import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Git from './github.png';
import Linkden from './Linkden.png';
 
function Contact() {
  return (
 <div>
              <div className="container">
    <div className="card border-0 shadow my-5">
      <div className="card-body p-5 content">
        <h1 className="font-weight-light">Contact</h1>
      <br />
      <br />
       <div className="col-12">
          <h5>  Email: kobiiohw@gmail.com</h5>
       </div>
       <br />
       <div className="col-12">
        <h5>  Phone: (224) 659-2254</h5>
       </div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div style={{height: '200px'}}>
                <a href="https://www.linkedin.com/in/kobii-hoyos-watkins-082b16192/">
                  <img className="con-img" src={Linkden} className="rounded float-left" alt="code-img"  style={{width: '64px'}}/>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div style={{height: '200px'}}>
                <a href="https://github.com/kobiihw">
                  <img className="con-img" src={Git} className="rounded float-left" alt="code-img" style={{width: '64px'}}/>
                </a>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
 </div>
  );
}
 
export default Contact;