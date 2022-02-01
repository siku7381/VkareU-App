import React from "react";
import './ServiceList.css';

class ServiceList extends React.Component{
    
    render(){
        return(
            <div className="container ServiceList">
                <h4 className="text-info fw-bold">Our Services</h4>
                <h1>A World of Health Care Services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col ">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/Doctor.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Doctor</h5>
                                <p className="card-text">A qualified doctor will visit at your schedule time Rs 700/- for 15 mins.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Nurse</h5>
                                <p className="card-text">A qualified nurse will visit at your schedule date &amp; time.</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Physiotherapy</h5>
                                <p className="card-text">A qualified doctor will visit at your schedule time Rs 350/- for 45 mins</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Chemist/ Medicine</h5>
                                <p className="card-text">A qualified doctor will visit at your schedule time Rs 350/- for 45 mins</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Pharmacist</h5>
                                <p className="card-text">A qualified doctor will visit at your schedule time Rs 250/- for 15 mins .</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card serviceList-card">
                            <img src="https://vkareu.com/wp-content/uploads/2021/11/4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info">Lab Test</h5>
                                <p className="card-text">A qualified doctor will visit at your schedule time Rs 150/- for 15 mins</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ServiceList;