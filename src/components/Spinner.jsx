import React from 'react';

const Spinner = () => {
    return (
        <div className='h-screen text-center mt-16' >
            <span className="loading loading-bars loading-lg text-amber-500"></span>
            <span className="loading loading-bars loading-xl text-green-500"></span>
        </div>
    );
};

export default Spinner;