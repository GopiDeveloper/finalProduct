import React from 'react';

const PostDetails = () => {
    console.log(props)
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-info">
           <div className="panel-heading">
               <h2>{props.match.params.topic}PostDtails Page</h2>
            </div>
            <div className="panel-body">
                <p>
                    PostDetails is something like a bird
                </p>
            </div>   
       </div>
    )
}

export default PostDetails;