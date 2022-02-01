import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container-fluid container">
                    <a className="navbar-brand text-light" href="#"><b>VkareU</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav space-between NavBar">
                            
                            <button className="nav-link  active btn text-light m-2 fw-bold" aria-current="page" href="#"><i className='fas fa-home '/> Home</button>
                            
                            <button className="nav-link btn text-light m-2 fw-bold" href="#"><i className='fas fa-user-circle '/> Profile</button>
                            
                            <button className="nav-link btn text-light m-2 fw-bold" href="#"><i className='fas fa-calendar '/> My Bookings</button>
                            
                            <button className="nav-link btn text-light m-2 fw-bold"><i className='fas fa-wallet '/> Refer</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;