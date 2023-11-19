import React, { useState,useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGAllery} from './ImageGallery/ImageGallery';
import { getData } from './utils/getData';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import { AppItem } from './App.styled';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (submitted && query.trim() !== '') {
      fetchImages(query, 1);
    }
  }, [query, submitted]);

  const fetchImages = async (query, page) => {
    try {
      setIsLoading(true);

      const data = await getData(query, page);
      setImages((prevImages) => [...prevImages, ...data.hits]);
      setPage((prevPage) => prevPage + 1);
      setTotal(data.total);
    } catch (error) {
      toast.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const updateQuery = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setImages([]);
    setPage(1);
    setSubmitted(true);
  };

  const handleLoadMore = () => {
    fetchImages(query, page);
  };

  return (
    <>
      <AppItem>
        <Searchbar onSubmit={handleSubmit} onChange={updateQuery} />
        <ImageGAllery images={images} />
        {submitted && !isLoading && images.length === 0 && <p>No images found</p>}

        {images.length >= 12 && images.length < total && <LoadMore onClick={handleLoadMore} />}
        {isLoading && <Loader />}
        <GlobalStyle />
        <Toaster />
      </AppItem>
    </>
  );
};
