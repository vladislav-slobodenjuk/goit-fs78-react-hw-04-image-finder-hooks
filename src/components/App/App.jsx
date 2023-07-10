import { useState } from 'react';
import { PER_PAGE, getImages } from 'services/api';

import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, img: null });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // state = {
  //   search: '',
  //   page: 1,
  //   totalPages: 1,
  //   images: [],
  //   modal: { isOpen: false, img: null },
  //   error: null,
  //   isLoading: false,
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const querry = e.target.search.value.trim();

    if (querry.length === 0) return console.log('empty querry');
    if (querry === this.state.search) return console.log('same querry');

    this.setState({ search: querry, page: 1, totalPages: 1 });
  };

  const openModal = img => {
    this.setState({ modal: { isOpen: true, img } });
  };

  const closeModal = () => {
    this.setState({ modal: { isOpen: false, img: null } });
  };

  const loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  // async componentDidUpdate(_, prevState) {
  //   const { search, page, images } = this.state;

  //   if (prevState.images < images && page !== 1) {
  //     window.scrollBy({ top: 520, behavior: 'smooth' });
  //   }

  //   if (prevState.search !== search) {
  //     try {
  //       this.setState({ isLoading: true });

  //       const { hits, totalHits } = await getImages(search, page);
  //       this.setState({
  //         images: hits,
  //         totalPages: Math.ceil(totalHits / PER_PAGE),
  //       });
  //       //
  //     } catch (error) {
  //       this.setState({ error });
  //       console.log(error.message);
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }

  //   if (prevState.page !== page && page !== 1) {
  //     try {
  //       this.setState({ isLoading: true });

  //       const { hits } = await getImages(search, page);
  //       this.setState({ images: [...prevState.images, ...hits] });
  //       //
  //     } catch (error) {
  //       this.setState({ error });
  //       console.log(error.message);
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  // const { search, images, modal, isLoading, page, totalPages, error } =
  //   this.state;

  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery images={images} onImgClick={openModal} />

      {images.length > 0 && page < totalPages && (
        <Button text="Load more" onButtonClick={loadMore} />
      )}

      {isLoading && <Loader />}

      {modal.isOpen && <Modal img={modal.img} onCloseModal={closeModal} />}

      {search.length === 0 && (
        <Notification text="Come on, look for something" />
      )}

      {search.length !== 0 && images.length === 0 && !isLoading && !error && (
        <Notification text="Nothing found 😔" />
      )}

      {error && (
        <Notification text="Oops, something went wrong 😬 Try again later" />
      )}

      {page === totalPages && page !== 1 && (
        <Notification text="That's all for now" />
      )}
    </Container>
  );
};