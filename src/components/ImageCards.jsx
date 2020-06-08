import React from 'react';

const ImageCards = ({ image }) => {  

    const tags = image.tags.split(',');
    // console.log(tags);

    return (
        <div className="max-w-sm rounded overflow-lg shadow-lg">
            <img src={image.webformatURL} alt="Johnson" className="w-full" />
            
            <div className="px-6 py-4">
                <h2 className="font-bold text-purple-600 text-xl mb-3">
                    {image.user}
                </h2>

                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map( (tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                    </span>
                ))}
                
            </div>
        </div>
    )
}

export default ImageCards;
