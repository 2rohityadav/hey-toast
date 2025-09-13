import { Component, h, Method, State } from '@stencil/core';

export interface ToastOptions {
  title: string;
  description: string;
  timeOut?: number;
  position?: string;
  type: string;
  allowClose?: boolean;
}

@Component({
  tag: 'ng-toastify-stencil',
  styleUrl: 'ng-toastify-stencil.css',
  shadow: true,
})
export class NgToastifyStencil {
  rootElement: HTMLElement;
  @State() timeOut: number = 300000;
  @State() position: string = 'top-right';

  @State() toastType: Array<object> = [
    {
      type: 'success',
      typeBgColor: 'successBgColor',
      typeTextColor: 'successTextColor',
      typeIcon: () => (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5 7.59429L8.83641 13.25L5.5 9.91822L6.34546 9.07394L8.83641 11.5614L13.6545 6.75L14.5 7.59429Z"
          fill="white"
        />
      ),
    },
    {
      type: 'info',
      typeBgColor: 'infoBgColor',
      typeTextColor: 'infoTextColor',
      typeIcon: () => (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 6.49976C10.4142 6.49976 10.75 6.16397 10.75 5.74976C10.75 5.33555 10.4142 4.99976 10 4.99976C9.58579 4.99976 9.25 5.33555 9.25 5.74976C9.25 6.16397 9.58579 6.49976 10 6.49976ZM10.6001 15.0001H9.4001L9.4001 8.00013H10.6001L10.6001 15.0001Z"
          fill="white"
        />
      ),
    },
    {
      type: 'warning',
      typeBgColor: 'warningBgColor',
      typeTextColor: 'warningTextColor',
      typeIcon: () => (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3998 7.99951H12.5998V12.9995H11.3998V7.99951ZM11.9999 14.4999C11.5857 14.4999 11.2499 14.8357 11.2499 15.2499C11.2499 15.6641 11.5857 15.9999 11.9999 15.9999C12.4142 15.9999 12.7499 15.6641 12.7499 15.2499C12.7499 14.8357 12.4142 14.4999 11.9999 14.4999Z"
          fill="white"
        />
      ),
    },
    {
      type: 'error',
      typeBgColor: 'errorBgColor',
      typeTextColor: 'errorTextColor',
      typeIcon: () => (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3999 4.99976H10.5999L10.5999 11.9998H9.3999L9.3999 4.99976ZM10 13.5002C9.58579 13.5002 9.25 13.836 9.25 14.2502C9.25 14.6645 9.58579 15.0002 10 15.0002C10.4142 15.0002 10.75 14.6645 10.75 14.2502C10.75 13.836 10.4142 13.5002 10 13.5002Z"
          fill="white"
        />
      ),
    },
  ];

  @Method() async Toast(toast: ToastOptions) {
    let timeOut = 3000; // Default timeout
    if (toast.timeOut !== undefined && typeof toast.timeOut === 'number') {
      timeOut = toast['timeOut'];
    }
    if (toast.position !== undefined && toast.position !== '') {
      this.position = toast['position'];
    }

    let toastContent = document.createElement('ng-toastify-stencil-content');
    this.rootElement.append(toastContent);
    this.toastContentComponent(toast, toastContent);

    // Only set auto-dismiss timeout if allowClose is not false
    if (toast.allowClose !== false) {
      setTimeout(() => {
        let toastContainer = toastContent.firstElementChild;
        if (toastContainer) {
          toastContainer.classList.remove('opacity-100');
          toastContainer.classList.add('opacity-0');
          setTimeout(() => {
            if (toastContent && toastContent.parentNode) {
              toastContent.remove();
            }
          }, 300);
        }
      }, timeOut);
    }
  }

  toastContentComponent(toast: ToastOptions, toastContent) {
    if (toast.title !== undefined && toast.title !== '') {
      toastContent.toastTitle = toast.title;
    }

    if (toast.description !== undefined && toast.description !== '') {
      toastContent.description = toast.description;
    }

    if (toast.allowClose !== undefined) {
      toastContent.allowClose = toast.allowClose;
    }

    if (toast.type !== undefined && toast.type !== '') {
      toastContent.type = toast.type;
      for (var i = 0; i < this.toastType.length; i++) {
        if (toastContent.type === this.toastType[i]['type']) {
          toastContent.typeBgColor = this.toastType[i]['typeBgColor'];
          toastContent.typeTextColor = this.toastType[i]['typeTextColor'];
          toastContent.typeIcon = this.toastType[i]['typeIcon']();
          break;
        }
      }
    }
  }

  render() {
    return <div class={`toast-container ${this.position}`} ref={rootElement => (this.rootElement = rootElement)}></div>;
  }
}
