import {Component} from 'react';
import {createPortal} from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  keyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  handleClose = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  }

  render() {
    return createPortal(<div onClick={this.handleClose} className={css.Overlay}>
      <div className={css.Modal}>{this.props.children}
      </div>
    </div>, modalRoot)
  }
}
