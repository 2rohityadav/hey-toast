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

## 🔗 Using with npm link

### Setup for Local Development
```bash
# In hey-toast project
npm run build
npm link

# In your consuming project
npm link hey-toast
```

### ✅ Super Simple Usage (No Manual Setup Required!)

The library now auto-registers web components when imported. Just use it directly:

```javascript
import { toast } from 'hey-toast';

// That's it! No manual imports or configuration needed
toast.success('Success', 'It works!');
```

### Legacy Manual Setup (No Longer Required)

If you prefer manual control, you can still include the web component script:

```html
<!-- Add this to your HTML head or before your main script -->
<script type="module" src="/node_modules/hey-toast/dist/hey-toast/hey-toast.esm.js"></script>
```

Or import it manually in your JavaScript:
```javascript
// Import web components first
import 'hey-toast/dist/hey-toast/hey-toast.esm.js';

// Then import the toast service
import { toast } from 'hey-toast';

// Now you can use it
toast.success('Success', 'It works!');
```

## 📦 Publishing to npm

### 1. Prepare for Publishing
```bash
# Build the project
npm run build

# Update package.json version
npm version patch  # or minor/major

# Check what will be published
npm pack --dry-run
```

### 2. Configure package.json for Publishing
```json
{
  "name": "hey-toast",
  "version": "1.0.0",
  "main": "dist/esm/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./web-components": {
      "import": "./dist/hey-toast/hey-toast.esm.js",
      "require": "./dist/hey-toast/hey-toast.js"
    }
  },
  "files": [
    "dist/",
    "loader/"
  ],
  "sideEffects": false
}
```

### 3. Publish to npm
```bash
# Login to npm (if not already logged in)
npm login

# Publish the package
npm publish
```

## 🏗️ Using in Nx Angular Project

### 1. Install the Package
```bash
# In your Nx workspace
npm install hey-toast
```

### 2. ✅ Super Simple Usage (No Configuration Required!)

Just import and use - no manual setup needed, even in Nx monorepos with `project.json`:

```typescript
import { Component } from '@angular/core';
import { toast } from 'hey-toast';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="onSaveChanges()">Save Changes</button>
  `
})
export class MyComponent {
  onSaveChanges() {
    toast.success('Success', 'Nick name updated');
  }
}
```

**Works with Nx monorepo structure:**
- ✅ `apps/my-app/project.json` - No changes needed
- ✅ `libs/my-lib/project.json` - No changes needed  
- ✅ `nx.json` - No changes needed
- ✅ Auto-detects web components in any Nx workspace

### 3. Create Toast Service (Optional but Recommended)

#### Create `libs/shared/services/toast.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { toast } from 'hey-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  success(title: string, description: string, options?: any) {
    toast.success(title, description, options);
  }

  error(title: string, description: string, options?: any) {
    toast.error(title, description, options);
  }

  info(title: string, description: string, options?: any) {
    toast.info(title, description, options);
  }

  warning(title: string, description: string, options?: any) {
    toast.warning(title, description, options);
  }
}
```

#### Use the Service in Your Component
```typescript
import { Component } from '@angular/core';
import { ToastService } from '@your-org/shared/services/toast.service';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="onSaveChanges()">Save Changes</button>
  `
})
export class MyComponent {
  constructor(private toastService: ToastService) {}

  onSaveChanges() {
    this.toastService.success('Success', 'Nick name updated');
  }
}
```

### 4. Legacy Manual Configuration (No Longer Required)

If you prefer manual control, you can still configure scripts in your `project.json`:

#### Update `apps/your-app/project.json` (Optional)
```json
{
  "targets": {
    "build": {
      "options": {
        "scripts": [
          "node_modules/hey-toast/dist/hey-toast/hey-toast.esm.js"
        ]
      }
    }
  }
}
```

#### Update `apps/your-app/src/main.ts` (Optional)
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Import hey-toast web components (optional - auto-imports now)
import 'hey-toast/dist/hey-toast/hey-toast.esm.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

**Note:** These manual configurations are no longer required with the new auto-registration feature!

### 5. Nx Workspace Configuration (Optional)

#### Update `nx.json` (No Longer Required)
```json
{
  "targetDefaults": {
    "build": {
      "options": {
        "scripts": [
          "node_modules/hey-toast/dist/hey-toast/hey-toast.esm.js"
        ]
      }
    }
  }
}
```

**Note:** With auto-registration, you don't need to configure `nx.json` or any `project.json` files!

#### Update `tsconfig.base.json`
```json
{
  "compilerOptions": {
    "paths": {
      "@your-org/shared/services": ["libs/shared/services/src/index.ts"]
    }
  }
}
```

### 6. Alternative: Nx Library Approach

Create a wrapper library in your Nx workspace:

```bash
# Generate a new library
nx generate @nx/angular:library toast-wrapper

# Add hey-toast as dependency
npm install hey-toast
```

#### Create `libs/toast-wrapper/src/lib/toast-wrapper.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { toast } from 'hey-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastWrapperService {
  success(title: string, description: string, options?: any) {
    toast.success(title, description, options);
  }

  error(title: string, description: string, options?: any) {
    toast.error(title, description, options);
  }

  info(title: string, description: string, options?: any) {
    toast.info(title, description, options);
  }

  warning(title: string, description: string, options?: any) {
    toast.warning(title, description, options);
  }
}
```

#### Export from `libs/toast-wrapper/src/index.ts`
```typescript
export * from './lib/toast-wrapper.service';
```

### Angular 19 Specific Setup

For Angular 19 projects, you need to configure web components properly:

#### 1. Update `angular.json`
```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "node_modules/hey-toast/dist/hey-toast/hey-toast.esm.js"
            ]
          }
        }
      }
    }
  }
}
```

#### 2. Update `src/main.ts`
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Import hey-toast web components
import 'hey-toast/dist/hey-toast/hey-toast.esm.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

#### 3. Update `src/app/app.config.ts`
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

#### 4. Use in Your Component
```typescript
import { Component } from '@angular/core';
import { toast } from 'hey-toast';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="onSaveChanges()">Save Changes</button>
  `
})
export class MyComponent {
  onSaveChanges() {
    toast.success('Success', 'Nick name updated');
  }
}
```

#### 5. Alternative: Service Approach
Create a toast service for better Angular integration:

```typescript
// src/app/services/toast.service.ts
import { Injectable } from '@angular/core';
import { toast } from 'hey-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  success(title: string, description: string, options?: any) {
    toast.success(title, description, options);
  }

  error(title: string, description: string, options?: any) {
    toast.error(title, description, options);
  }

  info(title: string, description: string, options?: any) {
    toast.info(title, description, options);
  }

  warning(title: string, description: string, options?: any) {
    toast.warning(title, description, options);
  }
}
```

Then use it in your component:
```typescript
import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="onSaveChanges()">Save Changes</button>
  `
})
export class MyComponent {
  constructor(private toastService: ToastService) {}

  onSaveChanges() {
    this.toastService.success('Success', 'Nick name updated');
  }
}
```

### Troubleshooting npm link Issues

1. **"toast is undefined" or "logInfo undefined"**
   - This is normal! The `toast.success()` method returns `void`
   - The issue is likely missing web component registration

2. **"Custom element not defined" errors**
   - Add the web component script to your HTML
   - Or import it manually in your JavaScript

3. **"Module not found" errors**
   - Make sure you've run `npm run build` in the hey-toast project
   - Check that the link is properly established: `npm ls hey-toast`

4. **Angular build errors**
   - Make sure the script path in `angular.json` is correct
   - Try restarting the Angular dev server after linking

### Debug Steps
```javascript
// Add this to debug
console.log('Custom elements:', {
  'hey-toast': customElements.get('hey-toast'),
  'hey-toast-content': customElements.get('hey-toast-content')
});

// Check if toast service is working
console.log('Toast service:', toast);
console.log('Toast methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(toast)));
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
