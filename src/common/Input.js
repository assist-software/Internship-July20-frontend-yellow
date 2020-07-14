import React from 'react';

const Input = (props) =>{
    
        return(
            <input type = "text" className = "searchBar" placeholder = {props.defaultVal}/>
        )
    
};

export default Input;