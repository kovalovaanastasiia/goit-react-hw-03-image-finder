import {Component} from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ImSearch} from "react-icons/im";
import css from './SearchBar.module.css'


export class Searchbar extends Component {
  state = {
    imageName: ''
  }

  handleNameChange = event => {
    this.setState({imageName: event.currentTarget.value.toLowerCase()});
  };
  resetForm = () => {
    this.setState({imageName: ''});
  }
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.warn('Enter the name of images or photos!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.resetForm();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.Form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.Button}>
            <ImSearch/>
          </button>
          <input
            className={css.Input}
            type="text"
            value={this.state.imageName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    )
  }
}

