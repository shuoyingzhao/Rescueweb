import React from 'react';
import {Link} from 'react-router-dom'
import './Nomatch.css'
const Nomatch = ({link, page}) => {
    return (
        
           <div className='UnknownWrapper'>
                <h1>404 Error</h1>
                <h2>Sorry,the Page not found</h2>
                <h4>The page you requested could not be found!</h4>
                <Link to={link}>Go to the {page ? page : "home"} page</Link>
           </div> 
               
           
       
    )
};

export default Nomatch;