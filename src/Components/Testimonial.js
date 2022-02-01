import React, { Component } from 'react';
import './Testimonial.css';

export default class Testimonial extends Component {

    getTestiMonials = () =>{
        return !this.props.testiMonials ? '' : this.props.testiMonials.map((testimonial) =>{
            return (
                <div className="col" key={testimonial.id}>
                    <div className='card testimonial-card'>
                        <div className="card-header d-flex ">
                            <div className='d-flex '>
                                <i className='far fa-user-circle' />
                            </div>
                            <div className='justify-content-start mx-3'>
                                <h5 className=''>{testimonial.name}</h5>
                                <p className=''>{testimonial.age}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{testimonial.title}</h5>
                            <p className="card-text">{testimonial.description}</p>
                        </div>
                        <div className="card-footer  bg-transparent border-success">
                            Rated {testimonial.ratings} star for previous booking.
                        </div>
                    </div>
                </div>
            );
        })
    }


    render() {
        return (
            <div className='container'>
                <h3>Testimonials</h3>
                <div className='row row-cols-1 row-cols-md-2 g-4 testimonial'>
                    {this.getTestiMonials()}
                </div>
            </div>
        );
    }
}
