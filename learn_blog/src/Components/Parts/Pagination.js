import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        

        <div className="pagination-box">
            <ul className="pagination-list">
                <li><Link to="#" className="active">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">Next Page <i className="fa fa-angle-right"></i></Link></li>
            </ul>
        </div>
    );
};



export default Pagination;