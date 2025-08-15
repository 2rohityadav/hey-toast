# hey-toast

Coolbrains Toast Notification web component - Built With Stenciljs

![Toast](https://github.com/2rohityadav/hey-toast/blob/main/hey-toast.png?raw=true "Toast")

This is a toast notification Web Component using Stenciljs.

- Built with Stencil
- Built with TailwindCSS v3.x

## Demo

[Demo](https://heyToast.netlify.app/)

## Installation

```bash
npm install hey-toast
```

Or use npm cdn

```js
<script type="module" src="https://cdn.jsdelivr.net/npm/hey-toast@1.0.0/dist/hey-toast/hey-toast.esm.js"></script>
```

## Usage

The Coolbrains toast Component can be use as following:

```html
<hey-toast></hey-toast>
or 
<hey-toast />

<button id="showToastSuccess" class="bg-green-700">Success</button>
```

```js
<script>

let heyToast = document.querySelector('hey-toast');

document.getElementById('showToastSuccess').addEventListener('click', event => {

        heyToast.Toast({
          title: 'Success', //default
          description: 'success message', //default
          timeOut: 3000, //default
          position: 'top-right', //default
          type: 'success', //default
        });

      });

</script>
```

## Positions

```js
'top';
'bottom';
'top-left';
'top-right'; //default
'bottom-left';
'bottom-right';
```

## type

```js
'success'; //default
'info';
'warning';
'error';
```
