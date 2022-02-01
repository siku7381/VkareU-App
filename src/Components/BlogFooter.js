import React,{ useState } from 'react';

const BlogFooter = (props) =>{
    const [readMore,setReadMore ] = useState(false);

    const handleClick =() =>{
        setReadMore(!readMore);
        props.handleFooterClick(readMore);
    }
    return (
        <div>
            <button className='btn'>Share</button>
            <button className='btn text-info fw-bold' onClick={handleClick}>{!readMore ? "See More..." : "See Less"}</button>
        </div>
    );
}

export default BlogFooter;