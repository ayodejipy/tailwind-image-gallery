import React, { useState, useEffect } from 'react';

function ImageCards() {
    const [ Images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ term, setTerm ] = useState('');

    useEffect(() => {

    }, []);
    

    return (
        <div className="max-w-sm rounded overflow-lg shadow-lg">
            <img src="" alt="Johnson" className="w-full" />
            
            <div className="px-6 py-4">
                <h2 className="font-bold text-purple-500 text-xl mb-3">
                    Photo by John Doe
                </h2>

                <ul>
                    <li>
                        <strong>Views: </strong>
                        4000
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        300
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        400
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag3
                </span>
            </div>
        </div>
    )
}

export default ImageCards;
