import React, { Component } from "react";

import MyModal from "components/Modal/Modal";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };


  render() {
    const { image } = this.props;

    return (
      <GalleryItem className="gallery-item">
        <GalleryImage
          src={image.webformatURL}
          alt={image.id}
          onClick={this.openModal}
          onLoad={this.handleModalLoad}
        />
        {this.state.isModalOpen && (
          <MyModal
            image={image}
            closeModal={this.closeModal}
          />
        )}
      </GalleryItem>
    );
  }
}







