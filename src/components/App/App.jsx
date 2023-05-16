import {Component} from "react";
import {ToastContainer} from 'react-toastify';

import {Searchbar} from "../Searchbar/Searchbar";
import {ImageGallery} from "../ImageGallery/ImageGallery";
import {getSearch} from "../../services/api";
import {Loader} from "../Loader/Loader";
import {Button} from "../Button/Button";
import {Modal} from "../Modal/Modal";

import css from './App.module.css'

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    total: 1,
    loading: false,
    error: null,
    showModal: false,
    empty: false,
  }
  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
      empty: false
    });
  };
  fetchImages = (text, page) => {
    this.setState({loading: true});

    getSearch(text, page)
      .then(resp => resp.json())
      .then(data => {

        if (data.hits.length === 0) {
          this.setState({empty: true});
        }
        this.setState(prevState => ({
          page: prevState.page,
          images: [...prevState.images, ...data.hits],
          total: data.total,
        }));
      })
      .catch(error => {
        this.setState({error: error.message});
      })
      .finally(() => {
        this.setState({loading: false});
      });
  };
  clickLoad = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (largeImageURL, alt) => {
    this.setState(({showModal}) => {
      return {showModal: !showModal, largeImageURL, alt};
    });
  };
  closeModal = () => {
    this.setState(({showModal}) => {
      return {showModal: !showModal};
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages(this.state.imageName, this.state.page);
    }
  }

  render() {
    const {imageName, error, loading, images, total, page, empty, showModal} = this.state;
    return (
      <div className={css.App}>
        <ToastContainer/>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {error && (
          <h2 style={{textAlign: 'center'}}>
            Something went wrong: ({error})!
          </h2>
        )}
        <ImageGallery toggleModal={this.openModal} images={images}/>
        {loading && <Loader/>}
        {empty &&
          <h2
            style={{textAlign: 'center'}}>
            There are no pictures for your request "{imageName}"</h2>}
        {total / 12 > page && <Button clickLoad={this.clickLoad}/>}
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <img src={this.state.largeImageURL} alt={this.state.alt}/>
          </Modal>
        )}
      </div>

    )
  }
}
