# 🥂 hey-toast

[![npm](https://img.shields.io/npm/v/hey-toast)](https://www.npmjs.com/package/hey-toast)
[![Coverage](https://codecov.io/gh/2rohityadav/hey-toast/graph/badge.svg?token=QMW415ZMD9)](https://codecov.io/gh/2rohityadav/hey-toast)
[![Bundle size](https://pkg-size.dev/badge/bundle/15200)](https://pkg-size.dev/hey-toast)
[![Gzipped Size](https://img.shields.io/badge/gzipped-4.2%20kB-brightgreen)](https://www.npmjs.com/package/hey-toast)
[![Stencil](https://img.shields.io/badge/Built%20with-Stencil-16161d.svg)](https://stenciljs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A beautiful, customizable toast notification library built with Stencil.js. **Raise a toast to better notifications** - works with any framework that supports web components.

## 🚀 Live Demo

🎯 **[Try the Live Demo](https://hey-toast-demo.netlify.app/)**

## Features

- 🎨 **Beautiful Design** - Modern, clean toast notifications
- 🚀 **Easy Integration** - Simple setup with Angular
- 🎯 **TypeScript Support** - Full TypeScript support
- 📱 **Responsive** - Works on all screen sizes
- 🎨 **Customizable** - Multiple positions and styles
- ⚡ **Lightweight** - Small bundle size
- 🔧 **Framework Agnostic** - Works with any framework that supports web components

## Installation

```bash
npm install hey-toast
# or
yarn add hey-toast
# or
pnpm add hey-toast
```

## Angular Integration

### 1. Easy Setup with Loader (Recommended)

In your `main.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAppInitializer } from '@angular/core';

// Import hey-toast loader
import { defineCustomElements as defineHeyToastElements } from 'hey-toast/loader';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideAppInitializer(() => defineHeyToastElements(window))
  ]
});
```

### 2. Manual Component Registration (Alternative)

If the loader approach doesn't work, you can manually register components:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Import hey-toast custom elements
import { defineCustomElement as defineHeyToast } from 'hey-toast/dist/components/hey-toast.js';
import { defineCustomElement as defineHeyToastContent } from 'hey-toast/dist/components/hey-toast-content.js';

// Register the custom elements
defineHeyToast();
defineHeyToastContent();

bootstrapApplication(AppComponent, appConfig);
```

### 3. Add CUSTOM_ELEMENTS_SCHEMA

In your component:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toast } from 'hey-toast';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="showSuccess()">Show Success Toast</button>
    <button (click)="showError()">Show Error Toast</button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExampleComponent {
  showSuccess() {
    toast.success('Success!', 'Operation completed successfully');
  }

  showError() {
    toast.error('Error!', 'Something went wrong');
  }
}
```

## Usage

### Basic Usage

```typescript
import { toast } from 'hey-toast';

// Success toast
toast.success('Success!', 'Operation completed successfully');

// Info toast
toast.info('Information', 'Here is some useful information');

// Warning toast
toast.warning('Warning!', 'Please check your input');

// Error toast
toast.error('Error!', 'Something went wrong');
```

### Advanced Usage with Options

```typescript
import { toast } from 'hey-toast';

// Custom options
toast.success('Success!', 'Operation completed', {
  timeOut: 5000,           // Auto-dismiss after 5 seconds
  position: 'top-right',   // Position on screen
  allowClose: true         // Allow manual close
});

// Different positions
toast.info('Info', 'Top left', { position: 'top-left' });
toast.warning('Warning', 'Bottom right', { position: 'bottom-right' });
toast.error('Error', 'Bottom left', { position: 'bottom-left' });
```

## API Reference

### Toast Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `toast.success(title, description, options?)` | Show success toast | `title: string`, `description: string`, `options?: ToastOptions` |
| `toast.info(title, description, options?)` | Show info toast | `title: string`, `description: string`, `options?: ToastOptions` |
| `toast.warning(title, description, options?)` | Show warning toast | `title: string`, `description: string`, `options?: ToastOptions` |
| `toast.error(title, description, options?)` | Show error toast | `title: string`, `description: string`, `options?: ToastOptions` |

### ToastOptions Interface

```typescript
interface ToastOptions {
  timeOut?: number;        // Auto-dismiss timeout in milliseconds (default: 3000)
  position?: string;       // Position on screen (default: 'top-right')
  allowClose?: boolean;    // Allow manual close (default: true)
}
```

### Available Positions

- `top-right` (default)
- `top-left`
- `top-center`
- `bottom-right`
- `bottom-left`
- `bottom-center`

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/2rohityadav/hey-toast.git
cd hey-toast

# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Run tests
pnpm test
```

### Release Process

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automatic versioning and publishing:

- Push to `main` branch triggers automatic release
- Version is determined by commit messages
- Changelog is automatically generated
- Package is automatically published to npm

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and releases.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [Rohit Yadav](https://github.com/2rohityadav)