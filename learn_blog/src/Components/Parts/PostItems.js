import React from 'react'
import { Link } from 'react-router-dom';
const Postitems = (props) => {
    return (    
        <div className="news-post article-post2">
            <div className="row">
                <div className="col-md-6">
                    <div className="image-holder">
                        <img src="upload/blog/f1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <Link className="text-link" to="#">{props.post.category.categoryName}</Link>
                    <h2><Link to="single-post.html">{props.post.title}</Link></h2>
                    <ul className="post-tags">
                        <li>3 days ago</li>
                        <li><Link to="#">3 comments</Link></li>
                        <li>by <Link to="#">{props.post.postedBy}</Link></li>
                    </ul>
                    <p>{props.post.description}</p>
                </div>
            </div>
        </div>
    );
};



export default Postitems;