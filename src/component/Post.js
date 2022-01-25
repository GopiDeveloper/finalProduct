import React from 'react';
import {Link} from 'react-router-dom'

const Post = () => {
    return(
        <div className="panel panel-primary">
           <div className="panel-heading">
               <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <p>
                    Post is something like a bird
                </p>
                <h2>Javascript</h2>
                <Link to="/post/JavaScript" className="btn btn-warning">
                    Details
                </Link>
                <h2>React</h2>
                <Link to="/post/React" className="btn btn-info">
                    Details
                </Link>
                <h2>Node</h2>
                <Link to="/post/Node" className="btn btn-success">
                    Details
                </Link>
            </div>   
       </div>
    )
}

export default Post;