import React, { Component } from 'react';
import './AppInformation.css';

export default class AppInfomation extends Component {
    
    render() {
        return (
            <div className='appinformation'>
                <div className='p-4'>
                    <h3 >VkareU</h3>
                    <p>{this.props.appinformation.mission}</p>
                    <p>{this.props.appinformation.vision}</p>
                    <p className='text-center'>Made in India for Indian</p>
                </div>
            </div>
        );
    }
}
