import React, { Component } from 'react';
import './Banner.css';
import Carousel from 'react-elastic-carousel';

export default class Banner extends Component {
    banners = this.props.banners.map(({ id, banner, information }) =>{
        return (
            <div className='items' key={id}>
                <div>
                    <img src={banner} alt={information}/>
                </div>
            </div>
        );
    })
    render() {
        return (
            <div className='banner text-light text-center'>
                <h4>In the Spotlight</h4>
                <p>Explore deals, offers, health updates &amp; more .</p>
                <Carousel>
                    {this.banners}
                </Carousel>
            </div>
        );
    }
}
