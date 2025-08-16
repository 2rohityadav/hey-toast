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

  private showToast(title: string, description: string, type: string, options?: ToastOptions) {
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

export const toast = ToastService.getInstance(); // Export a singleton instance

// No global assignment - users should import properly
// if (typeof window !== 'undefined') {
//   if (!(window as any).heyToast) {
//     (window as any).heyToast = { toast };
//   } else if (!(window as any).heyToast.toast) {
//     (window as any).heyToast.toast = toast;
//   }
//
//   // Also provide direct access for backward compatibility
//   if (!(window as any).toast) {
//     (window as any).toast = toast;
//   }
// }
