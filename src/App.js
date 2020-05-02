import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import axios from "axios";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    axios.get('./resumeData.json')
      .then((res) => {
        console.log('Data - ' + res.data)
        this.setState({ resumeData: res.data })
      })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
