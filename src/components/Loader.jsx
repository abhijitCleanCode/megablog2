import React from 'react';

function Loader() {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
            </div>
            <p className='font-poppins font-bold'>Please wait</p>
        </div>
    )
}

export default Loader