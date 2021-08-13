import React, { Component, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const AsyncReport = React.lazy(() => import('../Components/Report/Report'));
const AsyncCalculator = React.lazy(() => import('../Components/Calculator/Calculator'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'cal',
      bs: 0,
      dob: null
    }
  }

  setBSalary = (salary) => {
      this.setState({bs: salary})
  }

  setDOB = (dob) => {
      this.setState({dob: dob})
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {

    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        { this.state.route === 'cal' ?
            <Suspense fallback={<div className="pa5 pt7"><Loader type="ThreeDots" color="#02c771" height={80} width={80} /></div>}>
              <AsyncCalculator  state={this.state} setBSalary={this.setBSalary} setDOB={this.setDOB} onRouteChange={this.onRouteChange}/>
            </Suspense>
        :
            <Suspense fallback={<div className="pa5 pt7"><Loader type="ThreeDots" color="#02c771" height={80} width={80} /></div>}>
              <AsyncReport state={this.state} onRouteChange={this.onRouteChange}/>
            </Suspense>
        }
        <footer style={{fontFamily: 'Courier New'}} className="f5 white pa3">
          © {new Date().getFullYear()} | By <a className="dim hover-black b" href="https://yousefalturkey.sa/" target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none"}}> Yousef</a>.
        </footer>
      </div>
    );
  }
}

export default App;
