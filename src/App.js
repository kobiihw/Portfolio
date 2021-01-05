import React from 'react';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Me from './me.JPG';
 
function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Contact" component={Contact}/>
        </Switch>
    </div>
    </Router>

    
  );
}

const Home = () => (
    <div>
                  <div className="container">
        <div className="card border-0 bg-light shadow my-5">
          <div className="card-body p-5 content">
            <h1 className="font-weight-light">Bio</h1>
            <br />
            <br />
            <figure className="figure">
              <img src={Me} className="figure-img img-fluid rounded" alt="ME" style={{width: '200px'}}/>
              <figcaption className="figure-caption">Kobii Hoyos-Watkins</figcaption>
            </figure>
            <p className="lead">   I am currently attending NorthWestern University as a full stack development student. Born and raised in Evanston, IL, I have had the opportunity to get out, explore and find my own path. This has been a motivating force in learning to be proficient in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, Java, and more. Continuously facing new challenges and finding creative ways to solve complex problems is where I shine brightest. I have had the fortune to collaborate with brilliant minds to explore new ideas and bring them to fruition.</p>
          </div>
        </div>
      </div>
    </div>
);
 
 
export default App;