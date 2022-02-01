import React from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './Components/NavBar';
import Blog from './Components/Blog';
import AppInfomation from './Components/AppInfomation';
import Testimonial from './Components/Testimonial';
import Banner from './Components/Banner';
import ServiceList from './Components/ServiceList';
import MoreDetails from './Components/MoreDetails';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blogs : [],
      appInfo : {},
      testiMonials : [],
      banners : []
    }
  }
  async componentDidMount(){
    const res = await axios.get('http://3.15.227.148/vkareu/customerapi/apphome');
    console.log(res);
    this.setState({
      blogs : res.data.data.blog,
      appInfo : res.data.data.appinformation,
      testiMonials : res.data.data.testimonials,
      banners : res.data.data.banners
    })
  }
  
  render(){
    return (
      <div className="">
        <NavBar />
        <div className=''>
          
          <ServiceList />
          <Banner banners={this.state.banners} />
          <Testimonial testiMonials={this.state.testiMonials} />
          <MoreDetails />
          <Blog blogs={this.state.blogs}/>
          <AppInfomation appinformation={this.state.appInfo} />
        </div>
      </div>
    );
  }
}

export default App;
