# 🥂 ng-toastify-stencil

Ng-toastify-stencil Toast Notification web component - Built With Stenciljs ⚡

![Toast](https://github.com/2rohityadav/ng-toastify-stencil/blob/main/ng-toastify-stencil.png?raw=true "Toast")

This is a toast notification Web Component using Stenciljs.

- 🚀 Built with Stencil
- 🎨 Built with TailwindCSS v3.x
- ✨ Modern & Clean Design
- 🎯 Easy to Use

## Demo 🌐

[Demo](https://demo-heyToast.netlify.app/)

## Installation 📦

```bash
npm install ng-toastify-stencil
```

### For Local Development (npm link)
```bash
# In ng-toastify-stencil project
npm run build
npm link

# In your consuming project
npm link ng-toastify-stencil
```

### CDN Usage
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ng-toastify-stencil@1.0.0/dist/ng-toastify-stencil/ng-toastify-stencil.esm.js"></script>
```

### Nx Angular Project Setup
```bash
# Install in Nx workspace
npm install ng-toastify-stencil

# That's it! No additional configuration needed
# Just import and use: import { toast } from 'ng-toastify-stencil';
```

## Usage 💡

The Coolbrains toast Component provides a modern, easy-to-use API with **zero configuration required**:

### ✅ Super Simple Usage
```javascript
import { toast } from 'ng-toastify-stencil';

// Basic usage
toast.success('Success title', 'Success description!');
toast.info('Info title', 'Info description');
toast.warning('Warning title', 'Warning description');
toast.error('Error title', 'Error description');

// With optional configuration
toast.success('Success title', 'Success description!', {
  timeOut: 5000,
  position: 'bottom-center',
  allowClose: false
});
```

**That's it!** No manual web component imports or configuration needed. The library auto-registers everything when imported.

### Legacy Manual Setup (No Longer Required)

If you prefer manual control, you can still include the web component script:

```html
<!-- Add this to your HTML -->
<script type="module" src="/node_modules/ng-toastify-stencil/dist/ng-toastify-stencil/ng-toastify-stencil.esm.js"></script>
```

Or import it in your JavaScript:
```javascript
// Import web components first
import 'ng-toastify-stencil/dist/ng-toastify-stencil/ng-toastify-stencil.esm.js';
import { toast } from 'ng-toastify-stencil';

toast.success('Success', 'It works!');
```

## Positions 📍

```javascript
'top';           // Top center
'top-center';    // Top center (explicit)
'top-left';      // Top left corner
'top-right';     // Top right corner (default)
'bottom-left';   // Bottom left corner
'bottom-right';  // Bottom right corner
'bottom';        // Bottom center
'bottom-center'; // Bottom center (explicit)
```

## Types 🎨

```javascript
'success'; // default ✅
'info';    // ℹ️
'warning'; // ⚠️
'error';   // ❌
```

## Options ⚙️

```javascript
{
  timeOut: 3000,              // Optional - Auto dismiss time in ms (default: 3000)
  position: 'top-right',      // Optional - Toast position (default: 'top-right')
  allowClose: true            // Optional - Show close button (default: true)
}
```



## Examples 📝

### Basic Toast

```javascript
toast.success('Success title', 'Success description!');
```

### Toast without Manual Close

```javascript
toast.warning('Important Notice', 'This toast cannot be manually closed', {
  allowClose: false
});
```

### Custom Position and Timeout

```javascript
toast.info('Info title', 'This will appear at bottom center for 5 seconds', {
  position: 'bottom-center',
  timeOut: 5000
});
```

### Framework Examples

#### React

```javascript
import { toast } from 'ng-toastify-stencil';

function MyComponent() {
  const handleSuccess = () => {
    toast.success('Success', 'Data saved successfully!');
  };

  const handleError = () => {
    toast.error('Error', 'Failed to save data', {
      timeOut: 5000,
      position: 'top-center'
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Save</button>
      <button onClick={handleError}>Test Error</button>
    </div>
  );
}
```

#### Angular 19

```typescript
import { Component } from '@angular/core';
import { toast } from 'ng-toastify-stencil';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="showSuccess()">Show Success</button>
    <button (click)="showWarning()">Show Warning</button>
  `
})
export class MyComponent {
  showSuccess() {
    toast.success('Success', 'Operation completed!');
  }

  showWarning() {
    toast.warning('Warning', 'Please check your input', {
      allowClose: false
    });
  }
}
```

**Setup for Angular 19:**
No additional setup required! Just import and use:

```typescript
import { toast } from 'ng-toastify-stencil';
toast.success('Success', 'It works!');
```

#### Vue.js

```javascript
import { toast } from 'ng-toastify-stencil';

export default {
  methods: {
    showInfo() {
      toast.info('Info', 'Here is some information');
    },
    
    showCustomToast() {
      toast.success('Custom', 'Custom configuration', {
        timeOut: 10000,
        position: 'bottom-right',
        allowClose: true
      });
    }
  }
}
```

## Features ✨

- 🚀 **Modern API**: Clean method chaining with `toast.success()`, `toast.error()`, etc.
- 🎯 **Multiple Positions**: 8 different positioning options
- 🎨 **4 Toast Types**: Success, Info, Warning, Error
- ⏱️ **Customizable Timeout**: Set your own auto-dismiss time
- 🎪 **Smooth Animations**: Beautiful fade in/out transitions
- 📱 **Responsive Design**: Works on all screen sizes
- 🎨 **Modern Icons**: Clean SVG icons for each toast type
- 🖱️ **Manual Close**: Click the X button to close manually (optional)
- ♿ **Accessibility**: Proper ARIA labels and keyboard support
- 🔧 **Framework Agnostic**: Works with React, Angular, Vue.js, and vanilla JavaScript
- 📦 **Zero Dependencies**: Lightweight with no external dependencies
