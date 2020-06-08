import React, { useState, useEffect } from 'react';
import ImageCards from './components/ImageCards'

function App() {
    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ term, setTerm ] = useState('computer');

    useEffect(() => {

      
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`, {
        method: 'GET',
        mode: 'cors',
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
    },[]);
    
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {images.map( image => (
          <ImageCards key={image.id} image={image} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
