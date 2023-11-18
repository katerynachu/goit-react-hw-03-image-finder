import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Loader } from 'components/Loader/Loader';

const customStyles = {
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const MyModal = ({ image, closeModal }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoader = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const img = new Image();
    img.src = image.largeImageURL;
    img.onload = handleLoader;

    return () => {
      img.onload = null;
    };
  }, [image.largeImageURL]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="modal window with image"
    >
      {isLoading && <Loader />}
      {!isLoading && (
        <img
          src={image.largeImageURL}
          alt={image.id}
        />
      )}
    </Modal>
  );
};