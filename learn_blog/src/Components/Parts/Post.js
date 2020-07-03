import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Postitems from './PostItems'
import Pagination from './Pagination'

const Post = () => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    
    const postItems = posts.map((post) => <Postitems post={post} />)

    return (
        <div className="col-lg-8">
            <div className="blog-box list-style">
                {postItems}
                {/* <Postitems />
                <Postitems />
                <Postitems />
                <Postitems />
                <Postitems /> */}
                <Pagination />
            </div>
        </div>
    );
};



export default Post;