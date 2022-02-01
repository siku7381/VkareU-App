import React, { Component } from 'react';
import './Blog.css';
import BlogFooter from './BlogFooter';
import ReadMore from './ReadMore';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMore : false
        }
    }
    handleClick = (readMore) =>{
        this.setState({ showMore : !readMore })
    }
    getBlogs = () =>{
        return !this.props.blogs ? '' : this.props.blogs.map(blog => {
            return (
                <div className="col Blog-col" key={blog.id}>
                    <div className="card">
                        <img src={blog.image} className="card-img-top" alt={blog.title} />
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <ReadMore text={blog.description} readMore={this.state.showMore} />
                        </div>
                        <div className="card-footer bg-transparent border-success d-flex justify-content-end">
                            <BlogFooter handleFooterClick={this.handleClick} readMore={this.state.showMore}/>
                        
                        </div>
                    </div>
                </div>
            );
        })
    }
    render(){
        
        return(
            <div className='blog container'>
                <h3>Blogs from VkareU</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4 ">
                    {this.getBlogs()}                    
                </div>
            </div>
        );
    }
}

export default Blog;