import React from 'react';

const ReadMore = (props) =>{
    return(
        <div>
            <p className="card-text">
                {props.readMore ? props.text : `${props.text.substring(0,100)}`}
            </p>

        </div>
    );
}
export default ReadMore;