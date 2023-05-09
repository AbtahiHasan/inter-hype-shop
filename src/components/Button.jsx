import React from 'react';

const Button = ({children}) => {
    return (
        <button className='bg-[#FF9900] p-[10px]'>
            {children}
        </button>
    );
};

export default Button;