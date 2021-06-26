class AppModal extends HTMLElement {
  static template() {
    return `
      <div class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row align-items-center"></div>
          </div>
        </div>
      </div>
    `;
  }
  
  get id() {
    return this.getAttribute('modalId');
  }

  get heading() {
    return this.getAttribute('heading');
  }

  get images() {
    return this.getAttribute('images').split(', ');
  }

  connectedCallback() {
    this.appendChild(template2.content.cloneNode(true));
    const parent = this.querySelector('div');
    parent.id = this.id;

    const h5 = this.querySelector('h5');
    h5.textContent = this.heading;

    const modalBody = this.querySelector('.modal-body');

    this.images.forEach(img => {
      const container = document.createElement('div');
      container.className = 'col-sm-12 col-lg-6';

      const image = document.createElement('img');
      image.src = 'images/' + img;
      image.className = 'img-fluid';
      image.style.marginBottom = '1rem';
      image.alt = img;

      container.appendChild(image);
      
      modalBody.appendChild(container);
    });

  }

}

const template2 =  document.createElement('template');
template2.innerHTML = AppModal.template();

customElements.define('app-modal', AppModal);