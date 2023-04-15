# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KeaniaOne from "@electron-fonts/keania-one"

window.addEventListener("DOMContentLoaded", () => {
    KeaniaOne.inject()
})
```