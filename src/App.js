import React, { useState, useEffect } from 'react';
import ImageCards from './components/ImageCards';
import ImageSearch from './components/ImageSearch';

function App() {
    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ term, setTerm ] = useState('computer');

    // React hooks with fetch api
    useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`, {
        method: 'GET',
        mode: 'cors',
        header: {
            'Access-Control-Allow-Origin': '*',
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: null,
      })
        .then(response => response.json())
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    },[term]);
    
  return (
    <div className="container mx-auto">

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-4xl text-center mx-auto mt-32"> No Result Found.</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading...</h1> : <div className="grid grid-cols-3 gap-3">
        
        {images.map( image => (
          <ImageCards key={image.id} image={image} />
        ))}

      </div>}
      
    </div>
  );
}

export default App;
