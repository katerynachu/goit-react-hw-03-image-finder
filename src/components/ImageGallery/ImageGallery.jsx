import  ImageGalleryItem  from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGAllery = ({ images }) => {
  return (
    <ImageGalleryList className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryList>
  );
};
