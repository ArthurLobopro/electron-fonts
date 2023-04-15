# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MarkoOne from "@electron-fonts/marko-one"

window.addEventListener("DOMContentLoaded", () => {
    MarkoOne.inject()
})
```