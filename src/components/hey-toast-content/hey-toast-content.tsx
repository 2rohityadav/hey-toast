import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hey-toast-content',
  styleUrl: 'hey-toast-content.css',
  shadow: false,
})
export class HeyToastContent {
  el: HTMLElement;
  @Prop() toastTitle: string = 'Success';
  @Prop() description: string = 'success message';
  @Prop() type: string = 'success';
  @Prop() allowClose: boolean = true;

  @Prop() typeBgColor: string;
  @Prop() typeTextColor: string;
  @Prop() typeIcon: any;

  closeToast = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const toastElement = event.target.closest('hey-toast-content');
    if (toastElement) {
      const toastContent = toastElement.querySelector('.toast-content');
      if (toastContent) {
        toastContent.classList.add('opacity-0');
        setTimeout(() =>  toastElement.remove(), 300);
      } else {
        toastElement.remove();
      }
    }
  };

  closeSvgIconPath = () => (
    <g>
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
    </g>
  );

  buildToast = () => {
    let svgIcon = (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {this.typeIcon}
      </svg>
    );

    // Special handling for warning icon which has a different viewBox
    if (this.type === 'warning') {
      svgIcon = (
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          {this.typeIcon}
        </svg>
      );
    }

    return (
      <div
        class="toast-content"
        ref={el => (this.el = el)}
      >
        <div class={`icon-container ${this.typeBgColor}`}>{svgIcon}</div>

        <div class="content-area">
          <div class={`toast-title ${this.typeTextColor}`}>{this.toastTitle}</div>
          <div class="toast-description">{this.description}</div>
        </div>

        <div class="close-container">
          <svg
            onClick={e => this.closeToast(e)}
            class="close-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
            aria-label="Close toast"
          >
            {this.closeSvgIconPath()}
          </svg>
        </div>
      </div>
    );
  };

  render() {
    return <Host>{this.buildToast()}</Host>;
  }
}
