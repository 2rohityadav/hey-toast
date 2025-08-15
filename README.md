# hey-toast 🍞

Coolbrains Toast Notification web component - Built With Stenciljs ⚡

![Toast](https://github.com/2rohityadav/hey-toast/blob/main/hey-toast.png?raw=true "Toast")

This is a toast notification Web Component using Stenciljs.

- 🚀 Built with Stencil
- 🎨 Built with TailwindCSS v3.x
- ✨ Modern & Clean Design
- 🎯 Easy to Use

## Demo 🌐

[Demo](https://heyToast.netlify.app/)

## Installation 📦

```bash
npm install hey-toast
```

Or use npm cdn:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/hey-toast@1.0.0/dist/hey-toast/hey-toast.esm.js"></script>
```

## Usage 💡

The Coolbrains toast Component can be used as follows:

```html
<hey-toast></hey-toast>

<button id="showToastSuccess" class="bg-green-700">Success</button>
```

```javascript
<script>
let heyToast = document.querySelector('hey-toast');

document.getElementById('showToastSuccess').addEventListener('click', event => {
  heyToast.Toast({
    title: 'Success', // default
    description: 'success message', // default
    timeOut: 3000, // default
    position: 'top-right', // default
    type: 'success', // default
    allowClose: true, // default - enables manual close button
  });
});
</script>
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
  title: 'Toast Title',        // Required - The toast title
  description: 'Message',      // Required - The toast message
  timeOut: 3000,              // Optional - Auto dismiss time in ms (default: 3000)
  position: 'top-right',      // Optional - Toast position (default: 'top-right')
  type: 'success',            // Optional - Toast type (default: 'success')
  allowClose: true            // Optional - Show close button (default: true)
}
```

## Examples 📝

### Basic Toast

```javascript
heyToast.Toast({
  title: 'Success',
  description: 'Operation completed successfully!',
  type: 'success'
});
```

### Toast without Manual Close

```javascript
heyToast.Toast({
  title: 'Important Notice',
  description: 'This toast cannot be manually closed',
  type: 'warning',
  allowClose: false
});
```

### Custom Position and Timeout

```javascript
heyToast.Toast({
  title: 'Info',
  description: 'This will appear at bottom center for 5 seconds',
  type: 'info',
  position: 'bottom-center',
  timeOut: 5000
});
```

## Features ✨

- 🎯 **Multiple Positions**: 8 different positioning options
- 🎨 **4 Toast Types**: Success, Info, Warning, Error
- ⏱️ **Customizable Timeout**: Set your own auto-dismiss time
- 🎪 **Smooth Animations**: Beautiful fade in/out transitions
- 📱 **Responsive Design**: Works on all screen sizes
- 🎨 **Modern Icons**: Clean SVG icons for each toast type
- 🖱️ **Manual Close**: Click the X button to close manually (optional)
- ♿ **Accessibility**: Proper ARIA labels and keyboard support
