import { Controller } from '@hotwired/stimulus';
import { Modal } from 'bootstrap';

export default class extends Controller {
  static targets = ['modal'];

  connect() {
    this.modal = new Modal(this.modalTarget);
  }

  disconnect() {
    this.modal.dispose();
  }

  show() {
    this.modal.show();
  }

  hide(e) {
    if (e.detail.success) {
      this.modal.hide();
    }
  }
}
