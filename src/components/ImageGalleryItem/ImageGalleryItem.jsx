import React, { useState } from "react";
import {MyModal} from "components/Modal/Modal";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <GalleryItem className="gallery-item">
      <GalleryImage
        src={image.webformatURL}
        alt={image.id}
        onClick={openModal}
      />
      {isModalOpen && (
        <MyModal
          image={image}
          closeModal={closeModal}
        />
      )}
    </GalleryItem>
  );
};







