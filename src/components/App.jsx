import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGAllery } from './ImageGallery/ImageGallery';
import { getData } from './utils/getData';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import { AppItem } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    submitted: false,
    total:0,
  };
  async fetchImages(query, page) {
    try {
      this.setState({
        isLoading: true,
      });

      const data = await getData(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: prevState.page + 1,
        total:data.total,
      }));
    } catch (error) {
      toast.error('Error fetching images:', error);
    } finally {
      this.setState({
        isLoading: false,
       
      });
    }
  }
  updateQuery = event => {
    const newQuery = event.target.value;
    this.setState({
      query: newQuery,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      images: [],
      page: 1,
      submitted: true,
    });

    const { query } = this.state;
    if (query.trim() === '') {
      return;
    }
    this.fetchImages(query, 1);
  };
  handleLoadMore = () => {
    const { query, page } = this.state;
    this.fetchImages(query, page);
  };

  render() {
    return (
      <>
        <AppItem>
          <Searchbar onSubmit={this.handleSubmit} onChange={this.updateQuery} />
          <ImageGAllery images={this.state.images}></ImageGAllery>
          {this.state.submitted &&
            !this.state.isLoading &&
            this.state.images.length === 0 && <p>No images found</p>}

          {this.state.images.length >= 12 && this.state.images.length < this.state.total && (
            <LoadMore onClick={this.handleLoadMore} />
          )}
          {this.state.isLoading && <Loader/>}
          <GlobalStyle/>
          <Toaster />
        </AppItem>
      </>
    );
  }
}