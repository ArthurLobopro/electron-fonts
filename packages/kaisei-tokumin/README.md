# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KaiseiTokumin from "@electron-fonts/kaisei-tokumin"

window.addEventListener("DOMContentLoaded", () => {
    KaiseiTokumin.inject()
})
```