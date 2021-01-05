import React from 'react';
import Life from './portfolioss/lifeplus.jpg';
import Media from './portfolioss/media.png';
import Pass from './portfolioss/password.png';
import Quiz from './portfolioss/quiz.png';

 
function Portfolio() {
  return (
    <div>
              <div className="container">
    <div className="card border-0 bg-light shadow my-5">
      <div className="card-body p-5 content">
        <h1 className="font-weight-light">Portfolio</h1>
        <br />
        <br />
  <div className="container">
    <div className="row">
        <div className="col-md-6">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={Media} alt="Multi Media Search App" style={{height: '136px'}}/>
            <div className="card-body">
              <h5 className="card-title">Multi Media</h5>
            </div>
            <div className="card-body">
              <a href="https://kobiihw.github.io/Multi-Media-Search-App/" className="card-link">APP</a>
              <a href="https://github.com/jlovejo2/Multi-Media-Search-App" className="card-link">Git Hub</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={Life} alt="Life+ Habbit Tracker" style={{height: '136px'}} />
            <div className="card-body">
              <h5 className="card-title">Life+</h5>
            </div>
            <div className="card-body">
              <a href="https://project2project2.herokuapp.com/" className="card-link">APP</a>
              <a href="https://github.com/kobiihw/lifeplus" className="card-link">Git Hub</a>
            </div>
          </div>
        </div>
    </div>
  </div>
  <br />
  <div className="container">
    <div className="row">
        <div className="col-md-6">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={Pass} alt="Password Generator" style={{height: '136px'}}/>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
            </div>
            <div className="card-body">
              <a href="https://kobiihw.github.io/js-password-generator/" className="card-link">APP</a>
              <a href="https://github.com/kobiihw/js-password-generator" className="card-link">Git Hub</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={Quiz} alt="Quiz Brain Teaser" style={{height: '136px'}}/>
            <div className="card-body">
              <h5 className="card-title">Quiz</h5>
            </div>
            <div className="card-body">
              <a href="https://kobiihw.github.io/Quiz-HW/" className="card-link">APP</a>
              <a href="https://github.com/kobiihw/Quiz-HW" className="card-link">Git Hub</a>
            </div>
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
 
export default Portfolio;