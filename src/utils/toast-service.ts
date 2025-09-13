export interface ToastOptions {
  timeOut?: number;
  position?: string;
  allowClose?: boolean;
}

export interface ToastConfig {
  title: string;
  description: string;
  type: string;
  timeOut?: number;
  position?: string;
  allowClose?: boolean;
}

const registerWebComponents = async () => {
  if (customElements.get('hey-toast') && customElements.get('hey-toast-content')) {
    return;
  }

  if (typeof window !== 'undefined') {
    let attempts = 0;
    const maxAttempts = 200; // 20 seconds max wait

    while (attempts < maxAttempts && !customElements.get('hey-toast')) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }

    if (customElements.get('hey-toast')) {
      console.log('hey-toast: Components successfully registered');
      return;
    }
  }

  console.warn('hey-toast: Components not found. Make sure defineCustomElements() is called in your app.config.ts');
};

registerWebComponents();

export class ToastService {
  private static instance: ToastService;
  private toastElement: any;

  private constructor() {
    this.initializeToast();
  }

  public static getInstance(): ToastService {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }
    return ToastService.instance;
  }

  private initializeToast() {
    this.toastElement = document.querySelector('hey-toast');

    if (!this.toastElement) {
      this.toastElement = document.createElement('hey-toast');
      document.body.appendChild(this.toastElement);
    }
  }

  private async showToast(title: string, description: string, type: string, options?: ToastOptions): Promise<void> {
    await registerWebComponents();

    if (!this.toastElement) {
      this.initializeToast();
    }

    const checkReady = () => {
      if (this.toastElement && typeof this.toastElement.Toast === 'function') {
        const config: ToastConfig = {
          title,
          description,
          type,
          timeOut: options?.timeOut ?? 3000,
          position: options?.position ?? 'top-right',
          allowClose: options?.allowClose ?? true,
        };

        this.toastElement.Toast(config);
      } else {
        setTimeout(checkReady, 50);
      }
    };

    checkReady();
  }

  public success(title: string, description: string, options?: ToastOptions): void {
    this.showToast(title, description, 'success', options);
  }

  public info(title: string, description: string, options?: ToastOptions): void {
    this.showToast(title, description, 'info', options);
  }

  public warning(title: string, description: string, options?: ToastOptions): void {
    this.showToast(title, description, 'warning', options);
  }

  public error(title: string, description: string, options?: ToastOptions): void {
    this.showToast(title, description, 'error', options);
  }
}

export const toast = ToastService.getInstance();
