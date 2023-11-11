import { Component } from 'react';
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

export default class MyModal extends Component {

  state = {
    isLoading: true,
  }

  handleLoader = () => {
    this.setState({
      isLoading: false
    });
  }

  componentDidMount() {
    const { image } = this.props;
    const img = new Image();
    img.src = image.largeImageURL;
    img.onload = this.handleLoader;
  }

  render() {
    const { image, closeModal } = this.props;

    return (
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="modal window with image"
      >
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <img
            src={image.largeImageURL}
            alt={image.id}
          />
        )}
      </Modal>
    );
  }
}