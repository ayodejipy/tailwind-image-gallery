import React, { useState } from 'react';

// destructuring props in the arrow function
const ImageSearch = ({ searchText }) => {
    const [text, setTerm ] = useState('');

    // handle search on submit of search query
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }

    // const handleInputChange = (e) => {
    //     const searchWord = e.target.value;
    //     setTerm(searchWord);

    //     // set our search text to input value
    //     searchText(text);

    //     console.log(searchWord);
        
    // }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto"> 
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex item-center border-b-purple-400 hover:border-purple-700 py-2">
                    <input onChange={ e => setTerm(e.target.value )} className="appearance-none bg-transparent border-b border-purple-500 hover:border-purple-700 w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" placeholder="Search Image"/>
                    <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-600 text-purple-200 text-sm uppercase leading-wide border-4 py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>

            {/* <input onChange={handleInputChange}
            className="appearance-none bg-transparent border-b border-purple-500 hover:border-purple-700 w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" placeholder="Search Image"/> */}

        </div>
    )
}

export default ImageSearch;
