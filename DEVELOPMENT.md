# Development Guide

## 🚀 Quick Start

### Building the Project
```bash
npm run build
```

### Development Server
```bash
npm start
# Then open http://localhost:3333
```

## 📁 Simplified Testing Approach

### The Solution
We use a single `src/index.html` file that works perfectly with the development server. This file demonstrates the modern API:

```javascript
import { toast } from 'hey-toast';
toast.success('Success title', 'Success description!');
```

### Access the Demo
```
http://localhost:3333
```

This single page demonstrates the modern API with live examples!

## 🧪 Testing the APIs

### Modern API (Import-based)
```javascript
import { toast } from 'hey-toast';

// Basic usage
toast.success('Success title', 'Success description!');
toast.error('Error title', 'Error description');

// With custom configuration
toast.success('Success title', 'Success description!', {
  timeOut: 5000,
  position: 'bottom-center',
  allowClose: false
});
```

## 🎯 What You'll See

The demo page at `http://localhost:3333` shows:

### Modern API Section  
- Success, Info, Warning, Error, Custom buttons
- Uses the `toast.success()` method
- Shows loading status and error handling
- Demonstrates custom configuration
- Live code examples

## 🔧 Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Make sure you've run `npm run build` first
   - The development server serves files from `/build/` not `/dist/`

2. **"Custom element not defined" errors**
   - The web component API always works
   - Modern API waits for components to be ready automatically

3. **Modern API not loading**
   - Check browser console for specific error messages
   - The status indicator will show if there are issues

### Debug Mode
Open browser console to see:
- Component loading status
- Modern API initialization
- Any error messages

## 📦 Build Outputs

After running `npm run build`, these files are generated:

- `dist/hey-toast/hey-toast.esm.js` - Web components (for production)
- `dist/esm/index.js` - Toast services (for production)
- `www/build/` - Development server files

## 🎯 Best Practices

1. **Use the development server** for testing: `npm start`
2. **Access via `http://localhost:3333`** - everything works perfectly
3. **Always build before testing** to ensure latest changes are included
4. **Check browser console** for detailed error messages
5. **Use the single demo page** - it tests both APIs comprehensively

## 🚀 Framework Integration

### React
```javascript
import { toast } from 'hey-toast';

function MyComponent() {
  const handleSuccess = () => {
    toast.success('Success', 'Data saved successfully!');
  };
}
```

### Angular
```typescript
import { toast } from 'hey-toast';

@Component({...})
export class MyComponent {
  showSuccess() {
    toast.success('Success', 'Operation completed!');
  }
}
```

### Vue.js
```javascript
import { toast } from 'hey-toast';

export default {
  methods: {
    showInfo() {
      toast.info('Info', 'Here is some information');
    }
  }
}
```
