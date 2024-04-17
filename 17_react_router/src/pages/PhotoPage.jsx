import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/getData';

export default function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  //   const getPhotos = () => {
  //     fetch('https://jsonplaceholder.typicode.com/photos')
  //       .then((response) => response.json())
  //       .then((data) => setPhotos(data));
  //   };
  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/photos', setPhotos);
  }, []);

  return (
    <>
      <div>사진 페이지</div>
      {photos.map((photo) => {
        return (
          <>
            <div>{photo.title}</div>
            <img src={photo.url} alt='sample' />
          </>
        );
      })}
    </>
  );
}
