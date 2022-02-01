import React, { Component } from 'react';
import './MoreDetails.css';

export default class MoreDetails extends Component {
  render() {
    return (
        <div className='moreDetails'>
            <div className='p-4'>
                <h3 >VkareU</h3>
                <p>Our Community of Partners and patients drive us to create technologies for better and affordable healthcare.</p>
                <div className='d-flex justify-content-around'>
                    <div className='text-center'>
                        <i className='fas fa-user fa-3x' />
                        <p>Our Users</p>
                        <p>584+</p>
                    </div>
                    <div className='text-center'>
                        <i className='fas fa-handshake fa-3x' />
                        <p>Our Partners</p>
                        <p>726+</p>
                    </div>
                    <div className='text-center'>
                        <i className='fas fa-city fa-3x' />
                        <p>Cities Covered</p>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
