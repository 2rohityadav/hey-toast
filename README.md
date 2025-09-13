# ng-toastify-stencil

A beautiful, customizable toast notification library built with Stencil.js for Angular applications.

## Testing NPM Token

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
npm install ng-toastify-stencil
# or
yarn add ng-toastify-stencil
# or
pnpm add ng-toastify-stencil
```

## Angular Integration

### 1. Import and Register Components

In your `main.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Import ng-toastify custom elements
import { defineCustomElement as defineNgToastify } from 'ng-toastify-stencil/dist/components/ng-toastify.js';
import { defineCustomElement as defineNgToastifyContent } from 'ng-toastify-stencil/dist/components/ng-toastify-content.js';

// Register the custom elements
defineNgToastify();
defineNgToastifyContent();

bootstrapApplication(AppComponent, appConfig);
```

### 2. Add CUSTOM_ELEMENTS_SCHEMA

In your component:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toast } from 'ng-toastify-stencil';

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
import { toast } from 'ng-toastify-stencil';

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
import { toast } from 'ng-toastify-stencil';

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

## Styling

The toasts come with built-in styling, but you can customize them by overriding CSS variables:

```css
ng-toastify {
  --success-bg-color: #178303;
  --info-bg-color: #1476cc;
  --warning-bg-color: #fbc02d;
  --error-bg-color: #d32f2f;
}
```

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/2rohityadav/ng-toastify.git
cd ng-toastify

# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Run tests
pnpm test
```

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/) for commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test changes
- `build:` Build system changes
- `ci:` CI/CD changes
- `chore:` Other changes

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