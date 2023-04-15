# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AndadaPro from "@electron-fonts/andada-pro"

window.addEventListener("DOMContentLoaded", () => {
    AndadaPro.inject()
})
```